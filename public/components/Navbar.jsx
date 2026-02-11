import Toastify from 'toastify-js';

export default function Navbar() {
  function notification() {
    Toastify({
      text: 'Website is still in development phase',
      duration: 3000,
      close: true,
      gravity: 'top', // `top` or `bottom`
      position: 'center', // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: 'linear-gradient(to right, red, black)',
      },
    }).showToast();
  }

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-700">StayScape</h1>
          <button
            className="bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition"
            onClick={notification}
          >
            Book Now
          </button>
        </div>
      </nav>
    </>
  );
}
