import { useState } from 'react';

export default function Button({ tag }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      className="btn w-100 py-3 rounded-pill fw-semibold shadow-sm border-0 d-flex align-items-center justify-content-center text-decoration-none"
      style={{
        background: hover ? 'linear-gradient(90deg,#4338ca,#6d28d9)' : 'linear-gradient(90deg,#4f46e5,#7c3aed)',
        color: 'white',
        transition: 'all 0.3s ease',
        letterSpacing: '0.5px',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hover ? '0 10px 25px rgba(79,70,229,0.4)' : '0 4px 10px rgba(0,0,0,0.08)',
      }}
      type="submit"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {tag === 'addPage'
        ? 'Submit'
        : tag === 'editPage'
          ? 'Submit'
          : tag === 'login'
            ? 'Log In'
            : tag === 'register'
              ? 'Sign Up'
              : 'Upload'}
    </button>
  );
}
