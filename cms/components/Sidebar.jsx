import { NavLink, useNavigate } from 'react-router';

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav
      className="col-md-3 col-lg-2 d-md-block sidebar collapse vh-100"
      style={{ background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)' }}
      id="sidebar-menu"
    >
      <div className="position-sticky pt-4 px-3 text-white">
        {/* Main Navigation */}
        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link d-flex align-items-center text-white rounded-3 px-3 py-2 ${
                  isActive ? 'bg-white bg-opacity-10' : ''
                }`
              }
            >
              <span className="material-symbols-outlined me-3">hotel</span>
              Products
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/types"
              className={({ isActive }) =>
                `nav-link d-flex align-items-center text-white rounded-3 px-3 py-2 ${
                  isActive ? 'bg-white bg-opacity-10' : ''
                }`
              }
            >
              <span className="material-symbols-outlined me-3">category</span>
              Lodges Types
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `nav-link d-flex align-items-center text-white rounded-3 px-3 py-2 ${
                  isActive ? 'bg-white bg-opacity-10' : ''
                }`
              }
            >
              <span className="material-symbols-outlined me-3">person_add</span>
              Add User
            </NavLink>
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
            <NavLink
              to="/login"
              onClick={handleLogout}
              className="nav-link d-flex align-items-center text-danger rounded-3 px-3 py-2"
            >
              <span className="material-symbols-outlined me-3">logout</span>
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
