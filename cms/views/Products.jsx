import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setpage] = useState(1);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('ASC');
  const [typeId, setTypeId] = useState();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get('http://challenge.rundevrun.online/pub?page=1&search=');

        setProducts(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section
      className="col-md-9 ms-sm-auto col-lg-10 px-md-4 min-vh-100 py-4"
      style={{
        background: 'linear-gradient(135deg,#fff9db,#ffe066)',
      }}
      id="product-section"
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1
          className="fw-bold"
          style={{
            fontSize: '2.5rem',
            color: '#b08900',
          }}
        >
          ☀ Products
        </h1>

        <button
          className="btn rounded-pill px-4 fw-semibold shadow"
          style={{
            background: 'linear-gradient(90deg,#f59f00,#fab005)',
            color: 'white',
            border: 'none',
          }}
        >
          <span className="material-symbols-outlined align-middle me-1">add</span>
          New Product
        </button>
      </div>

      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body table-responsive p-4">
          <table className="table align-middle table-hover">
            <thead
              style={{
                backgroundColor: '#fff3bf',
              }}
            >
              <tr>
                <th>#</th>
                <th>Name</th>
                <th width="160px">Image</th>
                <th width="250px">Facility</th>
                <th>Capacity</th>
                <th>Price</th>
                <th>Author</th>
                <th />
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

                  <td className="fw-bold text-warning">Rp{item.price.toLocaleString('id-ID')}</td>

                  <td className="text-muted">{item.User?.email}</td>

                  <td>
                    <div className="d-flex gap-2">
                      <span className="material-symbols-outlined text-danger">delete</span>
                      <span className="material-symbols-outlined text-warning">edit</span>
                      <span className="material-symbols-outlined text-secondary">image</span>
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
