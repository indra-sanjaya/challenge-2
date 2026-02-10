export default function LandingPage() {
  return (
    <>
      {/* 🌌 HERO SECTION */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470")',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Find Your Peace
            <br />
            <span className="text-emerald-400">In Nature's Luxury</span>
          </h1>
          <p className="max-w-2xl text-lg text-gray-200 mb-10">
            Experience handpicked lodges designed for comfort, beauty, and unforgettable moments.
          </p>
          <div className="flex gap-6">
            {/* Primary Button */}
            <a
              href="/home"
              className="bg-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition transform hover:scale-105 shadow-lg"
            >
              Explore Lodges
            </a>
            {/* Secondary Button */}
            <a
              href="#discover"
              className="border border-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition"
            >
              Discover More
            </a>
          </div>
        </div>
      </section>

      {/* 🌿 IMAGE SHOWCASE SECTION */}
      <section id="discover" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Curated Escapes</h2>
          <p className="text-gray-600">From mountain hideaways to beachfront sanctuaries.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353"
              className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1493809842364-78817add7ffb"
              className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* 🌊 CALL TO ACTION SECTION */}
      <section className="py-24 bg-emerald-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Your Escape Starts Today</h2>
        <p className="mb-10 text-lg text-emerald-100">Browse our collection and find your perfect retreat.</p>
        <a
          href="/home"
          className="bg-white text-emerald-700 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
        >
          View All Lodges
        </a>
      </section>

      {/* 🦶 FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">© 2026 StayScape. Crafted for dreamers.</footer>
    </>
  );
}
