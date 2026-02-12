import { useNavigate } from 'react-router';

export default function LodgeCard({ lodge }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img src={lodge.imgUrl} alt={lodge.name} className="h-60 w-full object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{lodge.name}</h3>

        <p className="text-gray-500 text-sm mb-3">
          {lodge.location} • {lodge.Type?.name}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-emerald-600 font-bold text-lg">
            Rp{lodge.price.toLocaleString('id-ID')}
            <span className="text-sm text-gray-400 font-normal"> / month</span>
          </span>

          <button
            onClick={() => navigate(`/detail/${lodge.id}`)}
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}
