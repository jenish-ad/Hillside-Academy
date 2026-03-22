import { useEffect, useState } from "react";
import { getWhyChooseUs } from "../../services/api";
import SectionHeader from "../common/SectionHeader";

const FALLBACK = [
  { title: "Experienced Faculty",        description: "Dedicated teachers with years of expertise." },
  { title: "Modern Facilities",          description: "State-of-the-art classrooms and labs." },
  { title: "Holistic Development",       description: "Equal focus on academics, sports, and character." },
];

export default function WhyChooseUs() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getWhyChooseUs()
      .then((res) => {
        const data = res.data?.results ?? res.data;
        if (data.length) setItems(data);
      })
      .catch(() => {});
  }, []);

  const display = items.length ? items : FALLBACK;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Why Choose Hillside Academy?"
          subtitle="We are committed to shaping confident, capable, and compassionate individuals."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {display.map((item, i) => (
            <div key={i}
                 className="rounded-3xl border border-blue-100 p-8 hover:shadow-md
                            transition hover:border-yellow-300">
              <div className="h-12 w-12 rounded-2xl bg-yellow-400 mb-6 flex
                              items-center justify-center text-blue-900 font-bold text-xl">
                {i + 1}
              </div>
              <h3 className="text-blue-900 font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}