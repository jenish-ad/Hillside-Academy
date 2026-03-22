export default function MissionVision() {
  return (
    <section className="bg-amber-50 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-900">
            Our Mission & Vision
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-yellow-400" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-yellow-400 rounded-3xl p-10">
            <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center
                            justify-center text-yellow-400 font-extrabold text-lg mb-6">
              M
            </div>
            <h3 className="text-blue-900 font-extrabold text-2xl mb-4">
              Our Mission
            </h3>
            <p className="text-blue-900 leading-relaxed">
              To deliver exceptional education from Nursery to Grade 8 that
              develops academically strong, morally grounded, and creatively
              empowered students who contribute positively to their community
              and nation.
            </p>
          </div>

          <div className="bg-blue-900 rounded-3xl p-10">
            <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center
                            justify-center text-blue-900 font-extrabold text-lg mb-6">
              V
            </div>
            <h3 className="text-yellow-400 font-extrabold text-2xl mb-4">
              Our Vision
            </h3>
            <p className="text-blue-100 leading-relaxed">
              To be the most respected and trusted school in Karnali Province —
              a beacon of excellence where every child is seen, valued, and
              inspired to reach their full potential.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}