import { useEffect, useState } from "react";
import { getNotices } from "../../services/api";
import SectionHeader from "../common/SectionHeader";
import { Link } from "react-router-dom";
import { mediaUrl } from "../../services/media";

export default function NoticeBoard() {
  const [notices, setNotices]   = useState([]);
  const [news, setNews]         = useState([]);
  const [activeTab, setActiveTab] = useState("notice");

  useEffect(() => {
    getNotices("notice").then((r) => setNotices(r.data?.results ?? r.data)).catch(() => {});
    getNotices("news").then((r) => setNews(r.data?.results ?? r.data)).catch(() => {});
  }, []);

  const display = activeTab === "notice" ? notices : news;

  return (
    <section className="bg-yellow-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader title="Notice Board" />

        {/* Tabs */}
        <div className="flex gap-2 mb-8 justify-center">
          {["notice", "news"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition ${
                activeTab === tab
                  ? "bg-yellow-400 text-blue-900"
                  : "bg-white border border-blue-100 text-gray-500 hover:bg-yellow-50"
              }`}
            >
              {tab === "notice" ? "Notices" : "News & Announcements"}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="bg-white rounded-3xl border border-blue-100 divide-y divide-blue-50">
          {display.length === 0 ? (
            <p className="text-center text-gray-400 py-12 text-sm">
              No {activeTab === "notice" ? "notices" : "announcements"} yet.
            </p>
          ) : (
            display.slice(0, 6).map((item) => (
              <div key={item.id}
                   className="flex items-start justify-between px-6 py-4
                              hover:bg-yellow-50 transition">
                <div className="flex items-start gap-3">
                  {item.is_pinned && (
                    <span className="mt-1 shrink-0 w-2 h-2 rounded-full bg-yellow-400" />
                  )}
                  <div>
                    <p className="text-blue-900 font-semibold text-sm">{item.title}</p>
                    <p className="text-gray-400 text-xs mt-1">
                      {new Date(item.published_at).toLocaleDateString("en-NP")}
                    </p>
                  </div>
                </div>
                {item.attachment && (
                  <a href={mediaUrl(item.attachment)}
                     target="_blank" rel="noreferrer"
                     className="text-xs text-yellow-600 hover:underline shrink-0 ml-4">
                    Download
                  </a>
                )}
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-8">
          <Link to="/notice"
                className="inline-block border border-blue-900 text-blue-900 font-semibold
                           px-8 py-2 rounded-xl hover:bg-blue-900 hover:text-white transition">
            View All Notices
          </Link>
        </div>
      </div>
    </section>
  );
}