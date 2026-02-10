export default function Home() {
  return (
    <>
      {/* 🔥 NAVBAR */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-700">StayScape</h1>
          <button className="bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition">
            Book Now
          </button>
        </div>
      </nav>
      {/* 🌄 HERO SECTION */}
      <section
        className="relative bg-cover bg-center h-[500px]"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1663099497524-618b55bf9342?q=80&w=1136&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-4xl mx-auto text-center text-white pt-32 px-6">
          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Escape the Ordinary.
            <br />
            Stay Somewhere Extraordinary.
          </h2>
          <p className="text-lg mb-8 text-gray-200">Discover handpicked luxury lodges surrounded by nature.</p>
          {/* 🔎 SEARCH BAR */}
          <div className="bg-white rounded-full shadow-lg flex overflow-hidden max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search by location or lodge name..."
              className="flex-grow px-6 py-4 text-gray-700 focus:outline-none"
            />
            <button className="bg-emerald-600 text-white px-8 hover:bg-emerald-700 transition">Search</button>
          </div>
        </div>
      </section>
      {/* 🎛 FILTER BAR */}
      <section className="bg-white shadow-md -mt-10 relative z-10 rounded-xl max-w-6xl mx-auto px-6 py-6 flex flex-wrap gap-4 justify-between items-center">
        <div className="flex gap-4">
          <select className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500">
            <option>All Categories</option>
            <option>Mountain</option>
            <option>Beach</option>
            <option>Forest</option>
          </select>
          <select className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500">
            <option>Sort by</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
        <div className="text-sm text-gray-500">24 lodges available</div>
      </section>
      {/* 🏡 LODGE CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* CARD */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              alt="Lodge"
              className="h-60 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Emerald Forest Retreat</h3>
              <p className="text-gray-500 text-sm mb-3">Ubud, Bali • Forest Escape</p>
              <div className="flex justify-between items-center">
                <span className="text-emerald-600 font-bold text-lg">
                  $180 <span className="text-sm text-gray-400 font-normal">/ night</span>
                </span>
                <a href="#" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
                  View
                </a>
              </div>
            </div>
          </div>
          {/* Duplicate card for looping later */}
        </div>
      </section>
      {/* 📄 PAGINATION */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex justify-center items-center space-x-3">
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Prev</button>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg">1</button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">2</button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Next</button>
        </div>
      </section>
      {/* 🦶 FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © 2026 StayScape. Crafted for unforgettable escapes.
      </footer>
    </>
  );
}
