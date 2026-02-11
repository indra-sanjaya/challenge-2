import { Navigate, Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Toastify from 'toastify-js';
import Sidebar from '../components/Sidebar';

export default function BaseLayout() {
  if (!localStorage.access_token) {
    Toastify({
      text: 'Please login first',
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: 'bottom', // `top` or `bottom`
      position: 'right', // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: '#F87171',
        color: 'white',
      },
    }).showToast();
    return <Navigate to="/login" />;
  }

  return (
    <>
      <section className="container-fluid" id="home-section">
        <div className="row">
          <Navbar />
          <Sidebar />
          <Outlet />
        </div>
      </section>
      ;
    </>
  );
}
