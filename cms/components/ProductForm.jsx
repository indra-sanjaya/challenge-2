import { useState, useEffect } from 'react';
import Button from './Button';
import axios from 'axios';
import { NavLink } from 'react-router';

export default function ProductForm({ onSubmit, initialData }) {
  const [cancelHover, setCancelHover] = useState(false);
  const [types, setTypes] = useState([]);

  const [form, setForm] = useState({
    name: initialData?.name || '',
    facility: initialData?.facility || '',
    roomCapacity: initialData?.roomCapacity || 1,
    imgUrl: initialData?.imgUrl || '',
    location: initialData?.location || '',
    price: initialData?.price || 0,
    typeId: initialData?.typeId || '',
  });

  // Fetch room types from API with token
  useEffect(() => {
    async function fetchTypes() {
      try {
        const { data } = await axios.get('https://challenge.rundevrun.online/type', {
          headers: { Authorization: `Bearer ${localStorage.access_token}` },
        });
        setTypes(data.data); // set API data
      } catch (error) {
        console.log(error);
      }
    }

    fetchTypes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'roomCapacity' || name === 'price' || name === 'typeId' ? parseInt(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form); // send form data to parent
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 rounded-4 shadow-lg bg-white"
      style={{ maxWidth: '750px', margin: '0 auto', border: '1px solid rgba(0,0,0,0.05)' }}
    >
      {/* NAME */}
      <div className="mb-3">
        <label className="fw-semibold mb-2 d-block text-secondary">
          Room Name <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="form-control rounded-3"
          placeholder="Enter room name"
          required
        />
      </div>

      {/* FACILITY */}
      <div className="mb-3">
        <label className="fw-semibold mb-2 d-block text-secondary">
          Facility <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="facility"
          value={form.facility}
          onChange={handleChange}
          className="form-control rounded-3"
          placeholder="Fan, Wi-Fi, Kitchen..."
          required
        />
      </div>

      {/* LOCATION */}
      <div className="mb-3">
        <label className="fw-semibold mb-2 d-block text-secondary">
          Location <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          className="form-control rounded-3"
          placeholder="Bogor, Indonesia"
          required
        />
      </div>

      {/* TYPE */}
      <div className="mb-3">
        <label className="fw-semibold mb-2 d-block text-secondary">
          Room Type <span className="text-danger">*</span>
        </label>
        <select name="typeId" value={form.typeId} onChange={handleChange} className="form-select rounded-3" required>
          <option value="" disabled>
            -- Select Type --
          </option>
          {types.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>

      {/* CAPACITY + PRICE */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="fw-semibold mb-2 d-block text-secondary">
            Room Capacity <span className="text-danger">*</span>
          </label>
          <input
            type="number"
            name="roomCapacity"
            min={1}
            value={form.roomCapacity}
            onChange={handleChange}
            className="form-control rounded-3"
            required
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="fw-semibold mb-2 d-block text-secondary">
            Price <span className="text-danger">*</span>
          </label>
          <input
            type="number"
            name="price"
            min={0}
            value={form.price}
            onChange={handleChange}
            className="form-control rounded-3"
            required
          />
        </div>
      </div>

      {/* IMAGE URL */}
      <div className="mb-3">
        <label className="fw-semibold mb-2 d-block text-secondary">Image URL</label>
        <input
          type="text"
          name="imgUrl"
          value={form.imgUrl}
          onChange={handleChange}
          className="form-control rounded-3"
          placeholder="https://..."
        />
      </div>

      {/* BUTTONS */}
      <div className="row mt-5 mb-3">
        <div className="col-6">
          <NavLink
            to={'/products'}
            className="btn w-100 py-2 rounded-pill fw-semibold shadow-sm border-0"
            style={{
              background: cancelHover
                ? 'linear-gradient(90deg,#f3f4f6,#e5e7eb)'
                : 'linear-gradient(90deg,white,lightgrey)',
              color: 'black',
              transition: 'all 0.3s ease',
              transform: cancelHover ? 'translateY(-3px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setCancelHover(true)}
            onMouseLeave={() => setCancelHover(false)}
          >
            Cancel
          </NavLink>
        </div>

        <div className="col-6">
          <Button />
        </div>
      </div>
    </form>
  );
}
