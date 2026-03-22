export default function QuoteBar() {
  return (
    <div className="bg-yellow-400 py-2 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Repeat twice so it loops seamlessly */}
        {[0, 1].map((n) => (
          <span key={n} className="inline-flex items-center gap-8 px-8">
            <span className="text-blue-900 font-semibold text-sm tracking-wide">
              "Education signifies foremost development of the people"
            </span>
            <span className="text-blue-800 text-lg">✦</span>
            <span className="text-blue-900 font-semibold text-sm tracking-wide">
              Hillside Academy · Birendranagar-7, Surkhet
            </span>
            <span className="text-blue-800 text-lg">✦</span>
            <span className="text-blue-900 font-semibold text-sm tracking-wide">
              Nursery to Grade 8 · Est. 2075 BS
            </span>
            <span className="text-blue-800 text-lg">✦</span>
            <span className="text-blue-900 font-semibold text-sm tracking-wide">
              "Education signifies foremost development of the people"
            </span>
            <span className="text-blue-800 text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}