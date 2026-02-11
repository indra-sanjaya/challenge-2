import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Button from '../components/Button';

export default function Upload() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const token = localStorage.getItem('access_token');
        const { data } = await axios.get(`https://challenge.rundevrun.online/lodging/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProduct(data.data);
      } catch (err) {
        console.log(err);
      }
    }

    if (id) fetchProduct();
  }, [id]);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!imageFile) return alert('Select a file first!');

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const token = localStorage.getItem('access_token');
      await axios.patch(`https://challenge.rundevrun.online/lodging/${id}/image`, formData, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
      });
      alert('Image uploaded successfully!');
    } catch (err) {
      console.log(err);
      alert('Failed to upload image.');
    }
  };

  if (!product) return <p className="text-center mt-5">Loading...</p>;

  return (
    <section
      className="col-md-9 ms-sm-auto col-lg-10 px-md-5 py-5 min-vh-100"
      style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)' }}
    >
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-4">
        <h1
          className="fw-bold"
          style={{
            fontSize: '2.5rem',
            background: 'linear-gradient(90deg,#db2777,#ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Update Product Image
        </h1>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <div className="card shadow-lg border-0 rounded-4 p-5" style={{ width: '500px' }}>
          <form onSubmit={handleUpload}>
            <div className="mb-4">
              <label className="form-label fw-semibold text-secondary">Select Image File</label>
              <input type="file" className="form-control" required onChange={handleFileChange} />
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
              <Button tag={'upload'} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
