import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Types() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function fetchTypes() {
      try {
        const token = localStorage.getItem('access_token');
        const { data } = await axios.get('https://challenge.rundevrun.online/type', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTypes(data.data); // use the API data
      } catch (error) {
        console.log(error);
      }
    }

    fetchTypes();
  }, []);

  return (
    <section
      className="col-md-9 ms-sm-auto col-lg-10 px-md-4 min-vh-100 py-4"
      style={{
        background: 'linear-gradient(135deg,#f3ede7,#e0d6c8)',
      }}
      id="category-section"
    >
      {/* Header */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-4 mb-4 border-bottom">
        <h1
          className="fw-bold"
          style={{
            fontSize: '2.5rem',
            background: 'linear-gradient(90deg,#a57c3c,#d4af7f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Types of Lodgings
        </h1>
      </div>

      {/* Table */}
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm rounded-4 border-0">
            <div className="card-body table-responsive p-4">
              <table className="table align-middle table-hover text-center">
                <thead
                  style={{
                    backgroundColor: '#d4af7f33',
                  }}
                >
                  <tr>
                    <th scope="col" className="fw-semibold">
                      #
                    </th>
                    <th scope="col" className="fw-semibold">
                      Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {types.map((typeItem, index) => (
                    <tr
                      key={typeItem.id || index}
                      className="hover:bg-opacity-20"
                      style={{
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(165,124,60,0.15)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                      <td className="fw-semibold">{`${index + 1}`}</td>
                      <td className="fw-bold" style={{ color: '#8b5e3c' }}>
                        {typeItem.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
