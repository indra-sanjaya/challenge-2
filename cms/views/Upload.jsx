import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Button from '../components/Button';
import Toastify from 'toastify-js';

export default function Upload() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const token = localStorage.getItem('access_token');
        const { data } = await axios.get(`https://challenge.rundevrun.online/lodging/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    if (id) fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      return Toastify({
        text: 'Select a file first!',
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: { background: '#FBBF24', color: '#000000' },
      }).showToast();
    }

    const formData = new FormData();
    formData.append('file', imageFile);

    try {
      const token = localStorage.getItem('access_token');
      const { data } = await axios.patch(`https://challenge.rundevrun.online/lodging/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      navigate('/');

      Toastify({
        text: 'Image uploaded successfully!',
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: { background: '#34D399', color: '#000000' },
      }).showToast();

      setProduct({ ...product, imgUrl: data.data });
    } catch (error) {
      Toastify({
        text: error.response.data.message,
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: { background: '#F87171', color: '#000000' },
      }).showToast();
    }
  };

  if (!product) return <p className="text-center mt-5">Loading...</p>;

  return (
    <section
      className="col-md-9 ms-sm-auto col-lg-10 px-md-5 py-5 min-vh-100"
      style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)' }}
    >
      <h1
        className="fw-bold mb-4"
        style={{
          fontSize: '2.5rem',
          background: 'linear-gradient(90deg,#db2777,#ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Update Product Image
      </h1>

      <div className="d-flex justify-content-center mt-5">
        <div className="card shadow-lg border-0 rounded-4 p-5" style={{ width: '500px' }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label fw-semibold text-secondary">Select Image File</label>
              <input type="file" className="form-control" required onChange={handleChange} />
              {product.imgUrl && (
                <img
                  src={product.imgUrl}
                  alt={product.name}
                  className="mt-3 rounded-3 shadow-sm"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              )}
            </div>

            <div className="d-grid">
              <Button tag="upload" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
