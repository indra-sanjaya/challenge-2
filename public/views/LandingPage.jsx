import { useRef } from 'react';

export default function LandingPage() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 380;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* 🌌 HERO SECTION */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1660150658369-4583580ca659?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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
      <section id="discover" className="py-24 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Curated Escapes</h2>
          <p className="text-gray-600">From mountain hideaways to beachfront sanctuaries.</p>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Left Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-4 hover:bg-gray-100 z-10"
          >
            ←
          </button>

          {/* Slider */}
          <div ref={scrollRef} className="flex gap-8 overflow-hidden">
            {[
              'https://images.unsplash.com/photo-1505691723518-36a5ac3be353',
              'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
              'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
              'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
              'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
              'https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1596178067639-5c6e68aea6dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://plus.unsplash.com/premium_photo-1661962821338-c07da63995f9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ].map((img, index) => (
              <div key={index} className="min-w-[350px] h-80 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0">
                <img
                  src={img}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  alt="Lodge scenery"
                />
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-4 hover:bg-gray-100 z-10"
          >
            →
          </button>
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
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © 2026 StayScape. Crafted for unforgettable escapes.
      </footer>
    </>
  );
}
