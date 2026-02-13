import { useParams, useNavigate } from 'react-router';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Reserve from '../components/Reserve';

export default function Detail() {
  const { id } = useParams();
  const [lodge, setLodge] = useState(null);
  const [relatedLodges, setRelatedLodges] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 380;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`https://challenge.rundevrun.online/pub/${id}`);
        setLodge(data.data);

        const res = await axios.get(`https://challenge.rundevrun.online/pub`);
        const others = res.data.data.filter((item) => item.id !== +id);
        setRelatedLodges(others.slice(0, 25));
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  if (!lodge) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      {/* HERO IMAGE */}
      <section className="relative h-[500px]">
        <img
          src={lodge.imgUrl}
          alt={lodge.name}
          onClick={() => setIsOpen(true)}
          className="w-full h-full object-cover cursor-pointer"
        />

        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center">
          <h2 className="text-4xl font-bold">{lodge.name}</h2>
          <p className="text-gray-200 mt-2">
            <b>
              {lodge.location} • {lodge.Type.name}
            </b>
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        {/* LEFT SIDE - DESCRIPTION */}
        <div className="lg:col-span-2">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">About This {lodge.Type.name}</h3>

          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">{lodge.Type.name} Features</h4>

            <div className="grid grid-cols-2 gap-4">
              {lodge.facility?.split(',').map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-emerald-50 px-4 py-3 rounded-xl">
                  <span>✨</span>
                  <span className="text-gray-700">{item.trim()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - BOOKING CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-8 h-fit sticky top-24">
          <div className="text-3xl font-bold text-emerald-600 mb-4">
            Rp{lodge.price.toLocaleString('id-ID')}
            <span className="text-base text-gray-400 font-normal"> / month</span>
          </div>

          <div className="space-y-4">
            <input type="date" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500" />
            <input type="date" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500" />
            <Reserve />
          </div>

          <p className="text-sm text-gray-400 mt-4 text-center">Select your vacation date</p>
        </div>
      </section>

      {/* OTHER LODGES SLIDER */}
      <section className="max-w-7xl mx-auto px-6 pb-16 relative">
        <h3 className="text-2xl font-bold mb-6">Other Comfy Lodges</h3>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-4 hover:bg-gray-100 z-10"
          >
            ←
          </button>

          <div ref={scrollRef} className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide">
            {relatedLodges.map((item) => (
              <div
                key={item.id}
                className="min-w-[350px] h-60 rounded-2xl overflow-hidden shadow-lg group flex-shrink-0 cursor-pointer"
                onClick={() => navigate(`/detail/${item.id}`)}
              >
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-4 hover:bg-gray-100 z-10"
          >
            →
          </button>
        </div>
      </section>

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate('/home')}
        className="fixed bottom-6 left-6 bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition shadow-lg z-50"
      >
        ←
      </button>

      {/* HERO IMAGE MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:scale-150 transition"
          >
            ✕
          </button>

          <img src={lodge.imgUrl} alt={lodge.name} className="max-h-[85vh] max-w-[90vw] rounded-xl" />
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © 2026 StayScape. Crafted for unforgettable escapes.
      </footer>
    </>
  );
}
