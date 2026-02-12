import { useNavigate, useParams } from 'react-router';
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import Toastify from 'toastify-js';
import { useEffect, useState } from 'react';

export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`https://challenge.rundevrun.online/lodging/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        });

        setProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProduct();
  }, [id]);

  async function handleUpdateProduct(form) {
    try {
      const { data } = await axios.put(`https://challenge.rundevrun.online/lodging/${id}`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Toastify({
        text: `Succeed edit data ${data.data.name}`,
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: { background: '#34D399', color: '#000000' },
      }).showToast();

      navigate('/products');
    } catch (error) {
      Toastify({
        text: error.response?.data?.message || 'Failed to update',
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: { background: '#F87171', color: '#000000' },
      }).showToast();
    }
  }

  if (!product) return <p>Loading...</p>;

  return (
    <section
      className="col-md-9 ms-sm-auto col-lg-10 px-md-5 py-5 min-vh-100"
      style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)' }}
    >
      <h1
        className="fw-bold mb-4"
        style={{
          fontSize: '2.5rem',
          background: 'linear-gradient(90deg,#059669,#10b981)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Update Product
      </h1>

      <ProductForm tag="editPage" initialData={product} onSubmit={handleUpdateProduct} />
    </section>
  );
}
