import Button from '../components/Button';
import Toastify from 'toastify-js';
import { Navigate, useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://challenge.rundevrun.online/login', { email, password });

      localStorage.setItem('access_token', data.access_token);

      navigate('/');

      Toastify({
        text: 'Login success',
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
          color: 'white',
        },
      }).showToast();
    }
  }

  if (localStorage.access_token) {
    Toastify({
      text: 'You are already logged in',
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
    return <Navigate to="/" />;
  }

  return (
    <section
      className="min-vh-100 d-flex align-items-center py-5"
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      }}
    >
      <div className="container">
        {/* Title */}
        <div className="text-center text-white mb-5">
          <h1 className="fw-bold" style={{ fontSize: '2.5rem', letterSpacing: '1px' }}>
            Welcome Back
          </h1>
          <p className="opacity-75 mb-0">
            Log in and autocomplete your order with your personal data, or sign up to enjoy all the benefits of an IDEA
            account.
          </p>
        </div>

        {/* Card Wrapper */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <div
              className="row g-0 rounded-4 overflow-hidden shadow-lg"
              style={{
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Image Side */}
              <div className="col-md-6 d-flex align-items-center justify-content-center p-5 border-end">
                <img
                  src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/561/1056141_PE848273_S4.webp"
                  className="img-fluid rounded-4 shadow-sm"
                  alt="sofa"
                />
              </div>

              {/* Form Side */}
              <div className="col-md-6 p-5">
                <form onSubmit={handleLogin}>
                  <h2
                    className="fw-bold mb-3"
                    style={{
                      background: 'linear-gradient(90deg,#6366f1,#8b5cf6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Log in to your account
                  </h2>

                  <p className="text-muted small">
                    Log in to autocomplete your purchase order with your personal data.
                  </p>

                  <div className="mb-3">
                    <label htmlFor="login-email" className="form-label fw-semibold">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control rounded-3"
                      id="login-email"
                      placeholder="Enter email address..."
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="login-password" className="form-label fw-semibold">
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control rounded-3"
                      id="login-password"
                      placeholder="Enter your password..."
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="login-remember" />
                    <label className="form-check-label" htmlFor="login-remember">
                      Remember me
                    </label>
                  </div>

                  <Button tag={'login'} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
