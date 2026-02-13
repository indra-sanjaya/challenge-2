import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router';
import Toastify from 'toastify-js';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get('https://challenge.rundevrun.online/lodging', {
          headers: { Authorization: `Bearer ${localStorage.access_token}` },
        });

        setProducts(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`https://challenge.rundevrun.online/lodging/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.access_token}` },
      });

      setProducts(products.filter((p) => p.id !== id));

      Toastify({
        text: `Succeed delete data ${data.data.name}`,
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
  };

  if (loading) return <p className="text-center mt-5">Loading...</p>;

  return (
    <section
      className="col-md-9 ms-sm-auto col-lg-10 px-md-4 min-vh-100 py-4"
      style={{ background: 'linear-gradient(135deg,#fff9db,#ffe066)' }}
      id="product-section"
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold" style={{ fontSize: '2.5rem', color: '#b08900' }}>
          ☀ Products
        </h1>

        <NavLink
          to="/add"
          className="btn rounded-pill px-4 fw-semibold shadow"
          style={{
            background: 'linear-gradient(90deg,#f59f00,#fab005)',
            color: 'white',
            border: 'none',
          }}
        >
          <span className="material-symbols-outlined align-middle me-1">add</span>
          New Product
        </NavLink>
      </div>

      {/* Products Table */}
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body table-responsive p-4">
          <table className="table align-middle table-hover text-center">
            <thead style={{ backgroundColor: '#fff3bf' }}>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th width="160px">Image</th>
                <th width="250px">Facility</th>
                <th>Capacity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((item, index) => (
                <tr key={item.id} style={{ cursor: 'pointer' }}>
                  <td>{index + 1}</td>

                  <td className="fw-semibold text-dark">{item.name}</td>

                  <td>
                    <img
                      src={item.imgUrl}
                      alt={item.name}
                      style={{
                        width: '120px',
                        height: '80px',
                        objectFit: 'cover',
                        borderRadius: '12px',
                      }}
                    />
                  </td>

                  <td className="text-muted small">{item.facility}</td>

                  <td>{item.roomCapacity}</td>

                  <td className="fw-bold text-success">Rp {item.price.toLocaleString('id-ID')}</td>

                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      {/* Delete */}
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="btn btn-sm btn-danger d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>

                      {/* Edit */}
                      <NavLink
                        to={`/edit/${item.id}`}
                        className="btn btn-sm btn-warning d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined">edit</span>
                      </NavLink>

                      {/* Upload */}
                      <NavLink
                        to={`/upload/${item.id}`}
                        className="btn btn-sm btn-secondary d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                        title="Upload Image"
                      >
                        <span className="material-symbols-outlined">upload</span>
                      </NavLink>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
