import axios from 'axios';
import ProductForm from '../components/ProductForm';
import { useNavigate } from 'react-router';
import Toastify from 'toastify-js';

export default function AddProduct() {
  const navigate = useNavigate();

  async function handleAddProduct(form) {
    try {
      const { data } = await axios.post('https://challenge.rundevrun.online/lodging', form, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      navigate('/products');

      Toastify({
        text: `Succeed add data ${data.data.name}`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: '#34D399',
          color: '#000000',
        },
      }).showToast();
    } catch (error) {
      Toastify({
        text: error.response.data.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: 'top', // `top` or `bottom`
        position: 'center', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: '#F87171',
          color: '#000000',
        },
      }).showToast();
    }
  }

  return (
    <>
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-5 py-5 min-vh-100"
        id="new-product-section"
        style={{
          background: 'linear-gradient(135deg, #f8f9ff 0%, #eef1ff 100%)',
        }}
      >
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-4">
          <h1
            className="fw-bold"
            style={{
              fontSize: '2.5rem',
              background: 'linear-gradient(90deg,#4f46e5,#7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            New Product
          </h1>
        </div>

        <ProductForm tag="addPage" onSubmit={handleAddProduct} />

        <div className="row">
          <div className="col-12 col-md-6"></div>
        </div>
      </section>
    </>
  );
}
