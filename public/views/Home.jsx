import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';

export default function Home() {
  const [lodges, setLodges] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('asc');
  const [typeId, setTypeId] = useState('');
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTypes() {
      try {
        const { data } = await axios.get('http://challenge.rundevrun.online/pub/type');

        setTypes(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTypes();
  }, []);

  useEffect(() => {
    async function fetchLodges() {
      try {
        const { data } = await axios.get('http://challenge.rundevrun.online/pub', {
          params: { page, search, sort, typeId },
        });

        setLodges(data.data);
        setTotalPage(data.totalPage);
      } catch (error) {
        console.log(error);
      }
    }

    fetchLodges();
  }, [page, search, sort, typeId]);

  return (
    <>
      <Navbar />
      {/* 🌄 HERO SECTION */}
      <section
        className="relative bg-cover bg-center h-[500px]"
        style={{
          backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1663099497524-618b55bf9342")',
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
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white/90 backdrop-blur-lg shadow-xl rounded-3xl p-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* 🔎 Search */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full md:w-1/2">
            <span className="text-gray-400 mr-2">🔍</span>
            <input
              type="text"
              placeholder="Search your perfect stay..."
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
              className="bg-transparent outline-none w-full text-gray-700"
            />
          </div>

          {/* Right side controls */}
          <div className="flex gap-3 w-full md:w-auto">
            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => {
                setPage(1);
                setSort(e.target.value);
              }}
              className="bg-gray-100 px-4 py-2 rounded-full outline-none hover:bg-gray-200 transition"
            >
              <option value="asc">Oldest</option>
              <option value="desc">Newest</option>
            </select>

            {/* Filter */}
            <select
              value={typeId}
              onChange={(e) => {
                setPage(1);
                setTypeId(e.target.value);
              }}
              className="bg-gray-100 px-4 py-2 rounded-full outline-none hover:bg-gray-200 transition"
            >
              <option value="">All Types</option>

              {types.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* 🏡 LODGE CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {lodges.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img src={item.imgUrl} alt={item.name} className="h-60 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>

                <p className="text-gray-500 text-sm mb-3">
                  {item.location} • {item.Type?.name}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 font-bold text-lg">
                    Rp{item.price.toLocaleString('id-ID')}
                    <span className="text-sm text-gray-400 font-normal"> / month</span>
                  </span>

                  <button
                    onClick={() => navigate(`/detail/${item.id}`)}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex justify-center items-center space-x-3">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPage)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                page === i + 1 ? 'bg-emerald-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === totalPage}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>

      <button
        onClick={() => navigate('/')}
        className="fixed bottom-6 left-6 bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition shadow-lg z-50"
      >
        ←
      </button>

      {/* 🦶 FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © 2026 StayScape. Crafted for unforgettable escapes.
      </footer>
    </>
  );
}
