import { useState } from 'react';

export default function Detail() {
  const images = [
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-700">StayScape</h1>
          <button className="bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition">
            Book Now
          </button>
        </div>
      </nav>

      {/* HERO IMAGE */}
      <section className="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
          alt="Lodge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center">
          <h2 className="text-4xl font-bold">Emerald Forest Retreat</h2>
          <p className="text-gray-200 mt-2">
            <b>Ubud, Bali • Forest Escape</b>
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        {/* LEFT SIDE - DESCRIPTION */}
        <div className="lg:col-span-2">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">About This Lodge</h3>

          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Tucked away in the heart of Ubud’s lush rainforest,
            <span className="font-semibold text-emerald-700"> Emerald Forest Retreat </span>
            offers a peaceful sanctuary where luxury meets nature. Wake up to birdsong, unwind beside your private pool,
            and enjoy panoramic jungle views from every corner of your stay.
          </p>

          <p className="text-gray-500 leading-relaxed mb-8">
            Designed for travelers seeking tranquility without sacrificing comfort, this lodge blends modern elegance
            with authentic Balinese charm — creating an unforgettable escape from the ordinary.
          </p>

          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Lodge Features</h4>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-emerald-50 px-4 py-3 rounded-xl">
                <span>🌿</span>
                <span className="text-gray-700">2 Bedrooms</span>
              </div>

              <div className="flex items-center gap-3 bg-emerald-50 px-4 py-3 rounded-xl">
                <span>🛁</span>
                <span className="text-gray-700">2 Bathrooms</span>
              </div>

              <div className="flex items-center gap-3 bg-emerald-50 px-4 py-3 rounded-xl">
                <span>📶</span>
                <span className="text-gray-700">High-Speed WiFi</span>
              </div>

              <div className="flex items-center gap-3 bg-emerald-50 px-4 py-3 rounded-xl">
                <span>🏊</span>
                <span className="text-gray-700">Private Infinity Pool</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - BOOKING CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-8 h-fit sticky top-24">
          <div className="text-3xl font-bold text-emerald-600 mb-4">
            $180 <span className="text-base text-gray-400 font-normal">/ night</span>
          </div>

          <div className="space-y-4">
            <input type="date" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500" />
            <input type="date" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500" />
            <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition font-semibold">
              Reserve Now
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-4 text-center">Select your vacation date</p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-bold mb-6">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => openModal(index)}
              className="rounded-xl h-40 w-full object-cover cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:scale-150 transition"
          >
            <b>✕</b>
          </button>

          {/* Prev */}
          <button onClick={prevImage} className="absolute left-6 text-white text-4xl hover:scale-150 transition">
            <b>⮜</b>
          </button>

          {/* Image */}
          <img src={images[currentIndex]} className="max-h-[80vh] max-w-[90vw] rounded-xl" />

          {/* Next */}
          <button onClick={nextImage} className="absolute right-6 text-white text-4xl hover:scale-150 transition">
            <b>⮞</b>
          </button>
        </div>
      )}

      {/* 🦶 FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © 2026 StayScape. Crafted for unforgettable escapes.
      </footer>
    </>
  );
}
