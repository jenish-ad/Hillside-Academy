import SectionHeader from "../components/common/SectionHeader";
import useTitle from "../hooks/useTitle";


const GRADES = [
  { level: "Early Childhood",  grades: "Nursery, LKG, UKG",
    desc: "Play-based learning that builds curiosity, language, numbers, and social skills in a warm, safe environment." },
  { level: "Primary School",   grades: "Grade 1 – 5",
    desc: "A strong foundation in Nepali, English, Mathematics, Science, and Social Studies with activity-based teaching." },
  { level: "Lower Secondary",  grades: "Grade 6 – 8",
    desc: "Subject specialisation begins. Critical thinking, project work, and preparation for SEE-level studies." },
];

const ECAS = [
  { name: "Football & Cricket",  icon: "⚽",  desc: "Inter-school tournaments and regular coaching sessions." },
  { name: "Music & Dance",        icon: "🎵",  desc: "Classical and modern forms taught by trained instructors." },
  { name: "Art & Craft",          icon: "🎨",  desc: "Creative expression through drawing, painting and crafting." },
  { name: "Science Club",         icon: "🔬",  desc: "Hands-on experiments and science fair participation." },
  { name: "Debate & Public Speaking", icon: "🎤", desc: "Building confident communicators from an early age." },
  { name: "Yoga & Meditation",    icon: "🧘",  desc: "Daily mindfulness sessions promoting focus and well-being." },
  { name: "Library & Reading",    icon: "📚",  desc: "A rich library encouraging a lifelong love of reading." },
  { name: "Cultural Programs",    icon: "🎭",  desc: "Dashain, Tihar, and national day celebrations every year." },
];

export default function Academics() {
  useTitle("Academics");
  return (
    <main className="bg-amber-50 min-h-screen">

      {/* Banner */}
      <section className="bg-blue-900 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-3xl font-extrabold text-white">Academics</h1>
          <p className="mt-2 text-blue-200 text-sm">Home &rsaquo; Academics</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 max-w-3xl">
          <SectionHeader
            title="Our Academic Programs"
            subtitle="From Nursery through Grade 8, our curriculum is designed to build
                      strong foundations while nurturing each child's unique potential."
          />
        </div>
      </section>

      {/* Grade levels */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8">
          {GRADES.map((g, i) => (
            <div key={i}
                 className="bg-white rounded-3xl border border-yellow-200
                            overflow-hidden hover:shadow-md transition">
              <div className="bg-yellow-400 px-6 py-4">
                <p className="text-blue-900 font-extrabold text-lg">{g.level}</p>
                <p className="text-blue-800 text-sm font-semibold">{g.grades}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching approach */}
      <section className="bg-blue-900 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title="Our Teaching Approach" />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Child-Centred Learning",
                desc: "Every lesson is designed around the learner, not just the syllabus." },
              { title: "Activity-Based Methods",
                desc: "Hands-on activities, experiments and projects reinforce concepts deeply." },
              { title: "Bilingual Education",
                desc: "Strong emphasis on both Nepali and English from the earliest grades." },
              { title: "Regular Assessment",
                desc: "Continuous evaluation with detailed feedback keeps every student on track." },
            ].map((m, i) => (
              <div key={i}
                   className="bg-blue-800 rounded-2xl p-6 border border-blue-700">
                <div className="w-8 h-1 rounded-full bg-yellow-400 mb-4" />
                <h3 className="text-white font-bold mb-2">{m.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECA Section */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Extra-Curricular Activities"
            subtitle="At Hillside, education goes beyond textbooks.
                      Our rich ECA program develops talent, character and confidence."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ECAS.map((e, i) => (
              <div key={i}
                   className="bg-white rounded-2xl border border-yellow-200
                              p-6 text-center hover:border-yellow-400
                              hover:shadow-sm transition">
                <div className="text-3xl mb-3">{e.icon}</div>
                <h3 className="font-bold text-blue-900 text-sm mb-2">{e.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-14">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-2xl font-extrabold text-blue-900">
            Want to enroll your child at Hillside Academy?
          </h2>
          <p className="mt-3 text-blue-800 text-sm">
            Admissions are open for all grades from Nursery to Grade 8.
          </p>
          <a href="/admissions"
             className="mt-6 inline-block bg-blue-900 text-white font-bold
                        px-10 py-3 rounded-xl hover:bg-blue-800 transition">
            Apply for Admission
          </a>
        </div>
      </section>

    </main>
  );
}