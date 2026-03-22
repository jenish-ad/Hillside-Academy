import { useEffect, useState } from "react";
import { getAdmissionInfo, getNotices } from "../../services/api";

export default function AnnouncementPopup() {
  const [visible, setVisible]     = useState(false);
  const [admission, setAdmission] = useState(null);
  const [notices, setNotices]     = useState([]);

  useEffect(() => {
    // fetch open admissions and pinned notices in parallel
    Promise.all([
      getAdmissionInfo(),
      getNotices("notice"),
    ]).then(([admRes, notRes]) => {
      const adm = admRes.data?.results ?? admRes.data;
      const not = notRes.data?.results ?? notRes.data;

      const openAdm    = adm.filter((a) => a.is_open)[0] ?? null;
      const pinnedNot  = not.filter((n) => n.is_pinned).slice(0, 3);

      // only show popup if there's something to show
      if (openAdm || pinnedNot.length > 0) {
        setAdmission(openAdm);
        setNotices(pinnedNot);
        // small delay so page loads first
        setTimeout(() => setVisible(true), 800);
      }
    }).catch(() => {});
  }, []);

  if (!visible) return null;

  return (
    /* Backdrop */
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4
                    bg-black/50 backdrop-blur-sm"
         onClick={() => setVisible(false)}>

      {/* Modal */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg
                      overflow-hidden"
           onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="bg-yellow-400 px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-blue-900 font-extrabold text-lg">
              Hillside Academy
            </p>
            <p className="text-blue-800 text-xs font-semibold">
              Latest Announcements
            </p>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="w-8 h-8 rounded-full bg-blue-900 text-white flex
                       items-center justify-center text-lg font-bold
                       hover:bg-blue-800 transition leading-none"
          >
            ×
          </button>
        </div>

        <div className="px-6 py-6 space-y-4 max-h-[70vh] overflow-y-auto">

          {/* Admission banner — shown first if open */}
          {admission && (
            <div className="bg-blue-900 rounded-2xl p-5 text-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-400 text-blue-900 text-xs font-bold
                                 px-3 py-1 rounded-full uppercase tracking-wider">
                  Admissions Open
                </span>
              </div>
              <p className="font-bold text-base">
                {admission.program_name} Admissions
              </p>
              <p className="text-blue-200 text-sm mt-1">
                {admission.seats_available > 0
                  ? `${admission.seats_available} seats available`
                  : "Limited seats available"}
              </p>
              
              <a
                href="/admissions"
                onClick={() => setVisible(false)}
                className="mt-4 inline-block bg-yellow-400 hover:bg-yellow-500
                           text-blue-900 font-bold text-sm px-5 py-2
                           rounded-xl transition"
              >
                Apply Now
              </a>
            </div>
          )}

          {/* Pinned notices */}
          {notices.length > 0 && (
            <div>
              <p className="text-xs font-bold text-blue-900 uppercase
                             tracking-widest mb-3">
                Important Notices
              </p>
              <div className="space-y-2">
                {notices.map((n) => (
                  <div key={n.id}
                       className="flex items-start gap-3 bg-amber-50
                                  rounded-xl border border-yellow-200 px-4 py-3">
                    <div className="shrink-0 bg-yellow-400 rounded-lg px-2 py-1
                                    text-center min-w-[40px]">
                      <p className="text-blue-900 font-extrabold text-sm leading-none">
                        {new Date(n.published_at).getDate()}
                      </p>
                      <p className="text-blue-800 text-xs uppercase">
                        {new Date(n.published_at)
                          .toLocaleString("en", { month: "short" })}
                      </p>
                    </div>
                    <p className="text-blue-900 text-sm font-semibold leading-snug">
                      {n.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 pb-6 flex gap-3">
          <a
            href="/notice"
            onClick={() => setVisible(false)}
            className="flex-1 text-center bg-blue-900 hover:bg-blue-800
                       text-white font-bold py-3 rounded-xl text-sm transition"
          >
            View All Notices
          </a>
          <button
            onClick={() => setVisible(false)}
            className="flex-1 border-2 border-yellow-400 text-blue-900
                       font-bold py-3 rounded-xl text-sm hover:bg-yellow-50
                       transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}