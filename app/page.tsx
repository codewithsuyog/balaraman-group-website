export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF7] text-black">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-200">
        <h1 className="text-xl font-medium tracking-tight">
          Balaraman Group
        </h1>

        <div className="flex gap-8 text-sm text-gray-600">
          <a href="#">Research</a>
          <a href="#">Publications</a>
          <a href="#">People</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-10 py-28">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-[0.2em] uppercase text-gray-500">
            IISER Tirupati
          </p>

          <h1 className="mt-6 text-7xl font-light tracking-tight leading-tight">
            Catalysis, Sustainable Chemistry & Molecular Design
          </h1>

          <p className="mt-10 text-xl text-gray-600 max-w-3xl leading-relaxed">
            The Balaraman Research Group develops innovative catalytic
            systems and sustainable chemical methodologies with focus on
            organometallic chemistry and molecular design.
          </p>

          <div className="mt-16 flex gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-full hover:opacity-80 transition">
              Explore Research
            </button>

            <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              Publications
            </button>
          </div>

        </div>
      </section>

      {/* Research Section */}
      <section className="px-10 py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Research Areas
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="p-8 border border-gray-200 rounded-3xl hover:shadow-lg transition">
              <h3 className="text-2xl font-medium">
                Catalysis
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Development of catalytic systems for efficient
                and sustainable chemical transformations.
              </p>
            </div>

            <div className="p-8 border border-gray-200 rounded-3xl hover:shadow-lg transition">
              <h3 className="text-2xl font-medium">
                Organometallic Chemistry
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Exploring transition metal complexes and
                mechanistic pathways in synthesis.
              </p>
            </div>

            <div className="p-8 border border-gray-200 rounded-3xl hover:shadow-lg transition">
              <h3 className="text-2xl font-medium">
                Sustainable Chemistry
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Designing greener methodologies and
                environmentally conscious reactions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Publication */}
      <section className="px-10 py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Featured Publication
          </p>

          <div className="mt-12 max-w-4xl">

            <h2 className="text-4xl font-light leading-tight">
              Advances in Sustainable Catalytic Systems for
              Modern Organic Synthesis
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Our group focuses on developing environmentally conscious
              catalytic methodologies using organometallic systems for
              efficient chemical transformations.
            </p>

            <button className="mt-8 px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              Read Publication
            </button>

          </div>
        </div>
      </section>

      {/* People Section */}
      <section className="px-10 py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            People
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-12">

            <div className="border border-gray-200 rounded-3xl p-8">
              <div className="w-24 h-24 rounded-full bg-gray-200"></div>

              <h3 className="mt-6 text-2xl font-medium">
                Prof. Balaraman
              </h3>

              <p className="mt-2 text-gray-600">
                Principal Investigator
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Research interests include catalysis,
                organometallic chemistry, and sustainable synthesis.
              </p>
            </div>

            <div className="border border-gray-200 rounded-3xl p-8">
              <div className="w-24 h-24 rounded-full bg-gray-200"></div>

              <h3 className="mt-6 text-2xl font-medium">
                Research Scholars
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                PhD students working on catalysis,
                synthesis, and mechanistic chemistry.
              </p>
            </div>

            <div className="border border-gray-200 rounded-3xl p-8">
              <div className="w-24 h-24 rounded-full bg-gray-200"></div>

              <h3 className="mt-6 text-2xl font-medium">
                Alumni
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Former group members now contributing
                across academia and industry.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h3 className="text-xl font-medium">
              Balaraman Research Group
            </h3>

            <p className="mt-4 text-gray-600">
              Department of Chemistry <br />
              IISER Tirupati
            </p>
          </div>

          <div className="text-gray-600">
            <p>Email</p>
            <p className="mt-2">balaraman@iisertirupati.ac.in</p>
          </div>

        </div>
      </footer>

    </main>
  );
}