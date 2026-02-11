import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        <main className="container-fluid p-4 bg-light min-vh-100">{children}</main>
      </div>
    </div>
  );
}
