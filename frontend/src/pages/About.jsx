import SectionHeader from "../components/common/SectionHeader";
import useTitle from "../hooks/useTitle";
// inside component, first line:


const VALUES = [
  { title: "Excellence",
    desc: "We pursue the highest standards in teaching, learning, and conduct." },
  { title: "Integrity",
    desc: "Honesty and transparency in every action, decision, and relationship." },
  { title: "Compassion",
    desc: "Kindness and empathy are at the heart of our school community." },
  { title: "Discipline",
    desc: "Respectful conduct and a strong work ethic in every student." },
  { title: "Creativity",
    desc: "Encouraging original thinking and innovation every single day." },
  { title: "Community",
    desc: "Proudly rooted in Surkhet and committed to the growth of our people." },
];

export default function About() {
  useTitle("About Us");
  return (
    <main className="bg-amber-50 min-h-screen">

      {/* Banner */}
      <section className="bg-blue-900 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-3xl font-extrabold text-white">About Us</h1>
          <p className="mt-2 text-blue-200 text-sm">
            Home &rsaquo; About Us
          </p>
        </div>
      </section>

      {/* Short intro */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-block bg-yellow-400 text-blue-900 text-xs
                          font-bold px-3 py-1 rounded-full mb-4 uppercase
                          tracking-widest">
            Est. 2075 BS · Birendranagar, Surkhet
          </div>
          <h2 className="text-3xl font-extrabold text-blue-900 leading-snug">
            Who We Are
          </h2>
          <div className="mt-4 mx-auto w-14 h-1 rounded-full bg-yellow-400" />
          <p className="mt-6 text-gray-600 leading-relaxed">
            Hillside Academy is a leading educational institution in Surkhet,
            offering quality education from Nursery to Grade 8. Since 2075 BS
            we have been shaping confident, capable, and compassionate young
            people who make their families and community proud.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            With over 300 students, 25+ qualified teachers, and a rich
            programme of extracurricular activities, we are committed to
            nurturing every dimension of a child's development — academic,
            social, physical, and creative.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide everything we do at Hillside Academy."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={i}
                   className="bg-white rounded-2xl border border-yellow-200
                              p-8 hover:border-yellow-400 hover:shadow-sm
                              transition group">
                <div className="w-12 h-12 rounded-xl bg-yellow-400
                                group-hover:bg-blue-900 transition
                                flex items-center justify-center
                                text-blue-900 group-hover:text-yellow-400
                                font-extrabold text-lg mb-5">
                  {v.title.charAt(0)}
                </div>
                <h3 className="font-extrabold text-blue-900 text-lg mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}


