import { useState } from "react";
import { submitEnquiry } from "../services/api";
import SectionHeader from "../components/common/SectionHeader";
import useTitle from "../hooks/useTitle";


export default function Admissions() {
  useTitle("Admissions");
  const [form, setForm]       = useState({ full_name: "", email: "", phone: "", message: "" });
  const [status, setStatus]   = useState(null);
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitEnquiry(form);
      setStatus("success");
      setForm({ full_name: "", email: "", phone: "", message: "" });
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
          <h1 className="text-3xl font-extrabold text-white">Admissions</h1>
          <p className="mt-2 text-blue-200 text-sm">Home &rsaquo; Admissions</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Join the Hillside Family"
            subtitle="We welcome applications for all grades from Nursery to Grade 8.
                      Admissions are open throughout the year subject to seat availability."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { step: "01", title: "Enquire",
                desc: "Fill the enquiry form below or visit our school office in Birendranagar-7, Surkhet." },
              { step: "02", title: "Assessment",
                desc: "A simple, friendly interaction with the child to understand their current level." },
              { step: "03", title: "Enrolment",
                desc: "Complete the admission form, submit required documents, and pay the fees." },
            ].map((s) => (
              <div key={s.step}
                   className="bg-white rounded-3xl border border-yellow-200 p-8">
                <div className="text-4xl font-extrabold text-yellow-300 mb-3">
                  {s.step}
                </div>
                <h3 className="font-extrabold text-blue-900 text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Eligibility */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-extrabold text-blue-900 mb-6">
                Eligibility & Documents Required
              </h2>
              <div className="space-y-3">
                {[
                  "Nursery: Age 3.5 years and above",
                  "LKG: Age 4 years and above",
                  "UKG: Age 5 years and above",
                  "Grade 1 onwards: Completion of previous grade (report card required)",
                  "Birth certificate (original + photocopy)",
                  "Passport size photographs (4 copies)",
                  "Previous school's Transfer Certificate (if applicable)",
                  "Parent/Guardian citizenship copy",
                ].map((item, i) => (
                  <div key={i}
                       className="flex items-start gap-3 bg-white rounded-xl
                                  border border-yellow-200 px-4 py-3">
                    <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full
                                     bg-yellow-400 flex items-center justify-center
                                     text-blue-900 text-xs font-bold">
                      ✓
                    </span>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiry form */}
            <div className="bg-white rounded-3xl border border-yellow-200 p-8 shadow-sm">
              <h2 className="text-xl font-extrabold text-blue-900 mb-6">
                Send an Enquiry
              </h2>
              {status === "success" && (
                <div className="mb-4 bg-green-50 border border-green-200
                                text-green-700 rounded-xl px-4 py-3 text-sm">
                  Thank you! We will contact you shortly.
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
                  { name: "phone",     label: "Phone Number", type: "tel" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-semibold text-blue-900 mb-1">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={form[f.name]}
                      onChange={handle}
                      required
                      className="w-full border border-yellow-200 rounded-xl px-4 py-2.5
                                 text-sm focus:outline-none focus:border-yellow-400
                                 focus:ring-2 focus:ring-yellow-100 bg-amber-50"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-1">
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows={3}
                    className="w-full border border-yellow-200 rounded-xl px-4 py-2.5
                               text-sm focus:outline-none focus:border-yellow-400
                               focus:ring-2 focus:ring-yellow-100 bg-amber-50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white
                             font-bold py-3 rounded-xl transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}