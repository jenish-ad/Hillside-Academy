import { useState, useEffect } from "react";
import { getHeroSlides } from "../../services/api";
import { mediaUrl } from "../../services/media";

export default function HeroSlider() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    getHeroSlides()
      .then((res) => {
        const data = res.data?.results ?? res.data;
        if (data.length) setSlides(data);
      })
      .catch(() => {});
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      6000
    );
    return () => clearInterval(t);
  }, [slides.length]);

  const prev = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () =>
    setCurrent((c) => (c + 1) % slides.length);

  // Fallback — no slides in DB
  if (!slides.length) {
    return (
      <section className="w-full bg-yellow-50"
               style={{ height: "calc(100vh - 72px)" }}>
        <div className="w-full h-full bg-blue-100 flex items-center
                        justify-center text-blue-400 text-sm font-semibold">
          Add a hero image from the Admin Panel
        </div>
      </section>
    );
  }

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden bg-black"
             style={{ height: "calc(100vh - 72px)" }}>

      {/* Full photo — no overlay, no text on top */}
      <img loading="lazy"
        key={current}
        src={mediaUrl(slide.image)}
        alt="Hillside Academy"
        className="absolute inset-0 w-full h-full object-cover
                   transition-opacity duration-700 opacity-100"
      />

      {/* Optional: tiny caption bottom-left like Lincoln School */}
      {slide.subtitle && (
        <div className="absolute bottom-16 left-8">
          <p className="text-white text-sm font-medium bg-black/30
                        px-4 py-2 rounded-lg backdrop-blur-sm">
            {slide.subtitle}
          </p>
        </div>
      )}

      {/* Left arrow */}
      {slides.length > 1 && (
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2
                     bg-black/25 hover:bg-black/50 text-white
                     w-11 h-11 rounded-full flex items-center
                     justify-center transition text-lg"
        >
          &#8592;
        </button>
      )}

      {/* Right arrow */}
      {slides.length > 1 && (
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2
                     bg-black/25 hover:bg-black/50 text-white
                     w-11 h-11 rounded-full flex items-center
                     justify-center transition text-lg"
        >
          &#8594;
        </button>
      )}

      {/* Dot indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? "w-6 bg-yellow-400"
                  : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}

    </section>
  );
}