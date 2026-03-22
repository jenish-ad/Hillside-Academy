import { useEffect, useState } from "react";
import { getTestimonials } from "../../services/api";
import SectionHeader from "../common/SectionHeader";
import { mediaUrl } from "../../services/media";

export default function Testimonials() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getTestimonials("student")
      .then((r) => setItems(r.data?.results ?? r.data))
      .catch(() => {});
  }, []);

  if (!items.length) return null;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="What Our Students Say"
          subtitle="Voices from the Hillside community."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((item) => (
            <div key={item.id}
                 className="rounded-3xl border border-blue-100 p-8 hover:shadow-md transition">
              <p className="text-gray-600 text-sm leading-relaxed italic">
                "{item.message}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                {item.photo ? (
                  <img loading="lazy"
                    src={mediaUrl(item.photo)}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex
                                  items-center justify-center text-blue-900 font-bold">
                    {item.name[0]}
                  </div>
                )}
                <div>
                  <p className="font-bold text-blue-900 text-sm">{item.name}</p>
                  <p className="text-gray-400 text-xs">{item.program} · {item.batch_year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}