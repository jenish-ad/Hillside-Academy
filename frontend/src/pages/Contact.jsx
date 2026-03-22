import { useState, useEffect } from "react";
import { submitContact, getContactInfo } from "../services/api";
import SectionHeader from "../components/common/SectionHeader";
import useTitle from "../hooks/useTitle";
;

export default function Contact() {
  useTitle("Contact Us")
  const [form, setForm]         = useState({ full_name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus]     = useState(null);
  const [loading, setLoading]   = useState(false);
  const [info, setInfo]         = useState(null);

  useEffect(() => {
    getContactInfo()
      .then((r) => {
        const d = r.data?.results ?? r.data;
        if (d.length) setInfo(d[0]);
      })
      .catch(() => {});
  }, []);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContact(form);
      setStatus("success");
      setForm({ full_name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-amber-50 min-h-screen">

      {/* Banner */}
      <section className="bg-blue-900 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-3xl font-extrabold text-white">Contact Us</h1>
          <p className="mt-2 text-blue-200 text-sm">Home &rsaquo; Contact Us</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Get in Touch"
            subtitle="We'd love to hear from you. Reach out to us anytime."
          />

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Contact info */}
            <div className="space-y-6">
              {[
                { label: "Address",
                  value: "Birendranagar-7, Surkhet, Karnali Province, Nepal",
                  icon: "📍" },
                { label: "Phone",
                  value: info?.phone_primary ?? "+977-083-520142",
                  icon: "📞" },
                { label: "Email",
                  value: info?.email ?? "info@hillsideacademy.edu.np",
                  icon: "✉️" },
                { label: "Office Hours",
                  value: "Sunday – Friday: 9:00 AM – 4:00 PM",
                  icon: "🕘" },
              ].map((c) => (
                <div key={c.label}
                     className="flex items-start gap-4 bg-white rounded-2xl
                                border border-yellow-200 px-6 py-5">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-yellow-600 uppercase
                                  tracking-widest mb-1">
                      {c.label}
                    </p>
                    <p className="text-blue-900 font-semibold text-sm">{c.value}</p>
                  </div>
                </div>
              ))}

              {/* Map embed placeholder */}
              <div className="rounded-2xl overflow-hidden border border-yellow-200
                              bg-blue-100 h-52 flex items-center justify-center
                              text-blue-400 text-sm">
                {info?.map_embed_url ? (
                  <iframe
                    src={info.map_embed_url}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="School Location"
                  />
                ) : (
                  "Add Google Maps embed URL from Admin Panel"
                )}
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-3xl border border-yellow-200 p-8 shadow-sm">
              <h2 className="text-xl font-extrabold text-blue-900 mb-6">
                Send Us a Message
              </h2>
              {status === "success" && (
                <div className="mb-4 bg-green-50 border border-green-200
                                text-green-700 rounded-xl px-4 py-3 text-sm">
                  Message sent! We'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="mb-4 bg-red-50 border border-red-200
                                text-red-700 rounded-xl px-4 py-3 text-sm">
                  Something went wrong. Please try again.
                </div>
              )}
              <form onSubmit={submit} className="space-y-4">
                {[
                  { name: "full_name", label: "Full Name",    type: "text" },
                  { name: "email",     label: "Email",        type: "email" },
                  { name: "phone",     label: "Phone",        type: "tel" },
                  { name: "subject",   label: "Subject",      type: "text" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-semibold
                                      text-blue-900 mb-1">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={form[f.name]}
                      onChange={handle}
                      required
                      className="w-full border border-yellow-200 rounded-xl
                                 px-4 py-2.5 text-sm focus:outline-none
                                 focus:border-yellow-400 focus:ring-2
                                 focus:ring-yellow-100 bg-amber-50"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold
                                    text-blue-900 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    required
                    rows={4}
                    className="w-full border border-yellow-200 rounded-xl
                               px-4 py-2.5 text-sm focus:outline-none
                               focus:border-yellow-400 focus:ring-2
                               focus:ring-yellow-100 bg-amber-50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white
                             font-bold py-3 rounded-xl transition
                             disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}