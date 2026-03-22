

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
              Shaping Future <br />
              <span className="text-yellow-500">Leaders</span> Through Education
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl">
              Hillside Academy focuses on academic excellence, discipline, and
              overall student development in a safe and nurturing environment.
            </p>
          </div>

          <div className="rounded-3xl bg-blue-100 aspect-[4/3] flex items-center justify-center text-blue-900 font-semibold">
            School Image / Illustration
          </div>
        </div>
      </section>



      {/* WHY US */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-extrabold text-center text-blue-900">
            Why Choose Hillside Academy?
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              "Experienced and caring faculty",
              "Modern learning facilities",
              "Balanced focus on academics and character",
            ].map((text) => (
              <div
                key={text}
                className="rounded-3xl border border-blue-100 p-8"
              >
                <div className="h-12 w-12 rounded-2xl bg-yellow-400 mb-6" />
                <p className="text-blue-900 font-semibold">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
