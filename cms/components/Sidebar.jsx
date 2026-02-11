export default function Sidebar() {
  return (
    <nav
      className="col-md-3 col-lg-2 d-md-block sidebar collapse vh-100"
      style={{
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
      }}
      id="sidebar-menu"
    >
      <div className="position-sticky pt-4 px-3 text-white">
        {/* Main Navigation */}
        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <a
              className="nav-link d-flex align-items-center text-white rounded-3 px-3 py-2"
              href=""
              style={{ transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <span className="material-symbols-outlined me-3">shopping_bag</span>
              Products
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link d-flex align-items-center text-white rounded-3 px-3 py-2"
              href=""
              style={{ transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <span className="material-symbols-outlined me-3">category</span>
              Categories
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link d-flex align-items-center text-white rounded-3 px-3 py-2"
              href=""
              style={{ transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <span className="material-symbols-outlined me-3">person_add</span>
              Add User
            </a>
          </li>
        </ul>

        {/* Divider */}
        <hr className="text-secondary my-4" />

        {/* Account Section */}
        <div className="text-uppercase small text-secondary mb-2 px-2">Account</div>

        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <div className="nav-link d-flex align-items-center text-white px-3 py-2">
              <span className="material-symbols-outlined me-3">person</span>
              Hey, <span className="fw-semibold ms-1">Hacktiv8!</span>
            </div>
          </li>

          <li className="nav-item">
            <a
              className="nav-link d-flex align-items-center text-danger rounded-3 px-3 py-2"
              href=""
              style={{ transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,0,0,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <span className="material-symbols-outlined me-3">logout</span>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
