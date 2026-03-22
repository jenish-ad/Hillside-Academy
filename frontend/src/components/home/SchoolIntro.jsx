import { useEffect, useState } from "react";
import { getPrincipal } from "../../services/api";
import { mediaUrl } from "../../services/media";

export default function SchoolIntroAndPrincipal() {
  const [principal, setPrincipal] = useState(null);

  useEffect(() => {
    getPrincipal()
      .then((r) => {
        const d = r.data?.results ?? r.data;
        if (d.length) setPrincipal(d[0]);
      })
      .catch(() => {});
  }, []);

  const p = principal ?? {
    name: "Meena Devkota",
    designation: "Principal, Hillside Academy",
    photo: null,
    message: `At Hillside Academy, we believe that every child carries within them an extraordinary potential — waiting to be discovered, nurtured, and celebrated. Since 2075 BS we have been committed to providing Surkhet's children not just an education, but a foundation for life.\n\nWe are more than classrooms and textbooks — a place where curiosity is encouraged, discipline taught with compassion, and every student from Nursery to Grade 8 is known by name.\n\nTo every parent: we honour your trust every single day.`,
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT — School intro */}
        <div>
          <div className="inline-block bg-yellow-400 text-blue-900 text-xs
                          font-bold px-3 py-1 rounded-full mb-4 uppercase
                          tracking-widest">
            Est. 2075 BS · Birendranagar, Surkhet
          </div>
          <h2 className="text-3xl font-extrabold text-blue-900 leading-snug">
            Hillside Academy <br />
            
          </h2>
          <div className="mt-4 w-14 h-1 rounded-full bg-yellow-400" />
          <p className="mt-6 text-gray-600 leading-relaxed">
            Founded in 2075 BS, Hillside Academy was built on a single
            unwavering vision — to give the children of Birendranagar and
            greater Surkhet an education that is both excellent and holistic.
            From Nursery through Grade 8, we nurture young minds in an
            environment that is safe, stimulating, and deeply caring.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Recognised as one of the best schools in Surkhet, we combine a
            strong academic curriculum with rich extracurricular activities,
            ensuring every child discovers their unique strengths and grows
            into a confident, well-rounded individual.
          </p>

          {/* Stat pills */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              { value: "300+",  label: "Students" },
              { value: "25+",   label: "Teachers" },
              { value: "2075",  label: "Est. BS" },
              { value: "Nursery to 8", label: "Grades" },
            ].map((s) => (
              <div key={s.label}
                   className="bg-amber-50 rounded-xl border border-yellow-200
                              px-4 py-3 flex items-center gap-3">
                <span className="text-xl font-extrabold text-yellow-500">
                  {s.value}
                </span>
                <span className="text-sm text-blue-900 font-semibold">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            <a href="/about"
               className="bg-yellow-400 hover:bg-yellow-500 text-blue-900
                          font-bold px-6 py-3 rounded-xl transition text-sm">
              Learn More
            </a>
            <a href="/admissions"
               className="border-2 border-blue-900 text-blue-900 font-bold
                          px-6 py-3 rounded-xl hover:bg-blue-900
                          hover:text-white transition text-sm">
              Apply Now
            </a>
          </div>
        </div>

        {/* RIGHT — Principal message */}
        <div className="bg-amber-50 rounded-3xl border border-yellow-200 overflow-hidden">

          {/* Header strip */}
          <div className="bg-yellow-400 px-8 py-5 flex items-center gap-4">
            {p.photo ? (
              <img loading="lazy"
                src={mediaUrl(p.photo)}
                alt={p.name}
                className="w-40 h-40 rounded-full object-cover border-3
                           border-white shadow"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-blue-900 border-3
                              border-white shadow flex items-center justify-center
                              text-white text-2xl font-extrabold">
                {p.name.charAt(0)}
              </div>
            )}
            <div>
              <p className="font-extrabold text-blue-900 text-lg leading-tight">
                {p.name}
              </p>
              <p className="text-blue-800 text-sm">{p.designation}</p>
            </div>
          </div>

          {/* Message body */}
          <div className="px-8 py-7">
            <div className="text-yellow-400 text-5xl font-serif leading-none mb-3">
              "
            </div>
            <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
              {p.message}
            </p>
            <div className="mt-6 pt-5 border-t border-yellow-200">
              <p className="text-xs text-gray-400 italic">
                — {p.name}, {p.designation}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}