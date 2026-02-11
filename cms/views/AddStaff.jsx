import { useState } from 'react';
import Button from '../components/Button';

export default function RegisterForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'staff',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <form
      id="register-form"
      className="p-5 rounded-4 shadow-lg bg-white"
      style={{ border: '1px solid rgba(0,0,0,0.05)' }}
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
  );
}
