import { useEffect, useState } from "react";
import { getSchoolStats } from "../../services/api";

const FALLBACK = [
  { value: "1200+", label: "Students" },
  { value: "80+",   label: "Teachers" },
  { value: "25+",   label: "Years of Excellence" },
  { value: "100%",  label: "Board Results" },
];

export default function StatsBar() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getSchoolStats()
      .then((res) => {
        const data = res.data?.results ?? res.data;
        if (data.length) setStats(data);
      })
      .catch(() => {});
  }, []);

  const display = stats.length ? stats : FALLBACK;

  return (
    <section className="bg-blue-900 text-white mt-px">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-4
                      gap-8 text-center">
        {display.map((s) => (
          <div key={s.label}>
            <p className="text-3xl font-extrabold text-yellow-400">{s.value}</p>
            <p className="mt-2 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}