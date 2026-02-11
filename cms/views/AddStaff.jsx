import { useState } from 'react';
import Button from '../components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Toastify from 'toastify-js';

export default function RegisterForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'staff',
    phoneNumber: '',
    address: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post('https://challenge.rundevrun.online/add-user', form, {
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
        gravity: 'bottom', // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
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
        gravity: 'bottom', // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: '#F87171',
          color: '#000000',
        },
      }).showToast();
    }
  };

  return (
    <section
      className="col-md-9 ms-sm-auto col-lg-10 px-md-4 min-vh-100 py-5 d-flex justify-content-center align-items-start"
      style={{ background: 'linear-gradient(135deg,#f3ede7,#e0d6c8)' }}
    >
      <form
        id="register-form"
        className="p-5 rounded-4 shadow-lg bg-white"
        style={{ border: '1px solid rgba(0,0,0,0.05)', maxWidth: '600px', width: '100%' }}
        onSubmit={handleSubmit}
      >
        <h1
          className="fw-bold mb-4"
          style={{
            fontSize: '2.3rem',
            background: 'linear-gradient(90deg,#2563eb,#4f46e5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Register User
        </h1>

        {/* USERNAME */}
        <div className="mb-3">
          <label className="fw-semibold text-secondary">
            Username <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="form-control rounded-3 shadow-sm border-0"
            placeholder="Enter username..."
            required
          />
        </div>

        {/* EMAIL */}
        <div className="mb-3">
          <label className="fw-semibold text-secondary">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control rounded-3 shadow-sm border-0"
            placeholder="Enter email..."
            required
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-3">
          <label className="fw-semibold text-secondary">
            Password <span className="text-danger">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="form-control rounded-3 shadow-sm border-0"
            placeholder="Enter password..."
            required
          />
        </div>

        {/* PHONE */}
        <div className="mb-3">
          <label className="fw-semibold text-secondary">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            className="form-control rounded-3 shadow-sm border-0"
            placeholder="Enter phone number (optional)..."
          />
        </div>

        {/* ADDRESS */}
        <div className="mb-3">
          <label className="fw-semibold text-secondary">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            rows={3}
            className="form-control rounded-3 shadow-sm border-0"
            placeholder="Enter address (optional)..."
            style={{ resize: 'none' }}
          />
        </div>

        <Button tag="register" />
      </form>
    </section>
  );
}
