import Toastify from 'toastify-js';

export default function Reserve() {
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
      <button
        className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition font-semibold"
        onClick={notification}
      >
        Reserve Now
      </button>
    </>
  );
}
