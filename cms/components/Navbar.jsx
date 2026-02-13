export default function Navbar() {
  return (
    <header
      className="navbar sticky-top d-flex align-items-center justify-content-between px-4 shadow-sm"
      style={{
        height: '65px',
        background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        zIndex: 1030,
      }}
    >
      {/* Left Section */}
      <div className="d-flex align-items-center">
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.UU5ay0Fox8fqTyGr61kFFQAAAA?pid=Api&P=0&h=180"
          width={40}
          className="me-3"
          alt="IDEA"
        />
        <span className="fw-bold text-white" style={{ letterSpacing: '0.5px' }}>
          Admin Panel
        </span>
      </div>

      {/* Mobile Toggle */}
      <button
        className="navbar-toggler d-md-none border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebar-menu"
        aria-controls="sidebar-menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ filter: 'invert(1)' }}
      >
        <span className="navbar-toggler-icon" />
      </button>

      {/* Right Section */}
      <div className="d-none d-md-flex align-items-center gap-3 text-white">
        <span className="material-symbols-outlined" style={{ cursor: 'pointer' }}>
          notifications
        </span>

        <div className="d-flex align-items-center">
          <span className="material-symbols-outlined me-2">account_circle</span>
          <span className="fw-semibold">Admin</span>
        </div>
      </div>
    </header>
  );
}
