import { useState } from 'react';
import Login from '../views/Login';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PreLoader from '../components/PreLoader';
import Products from '../views/Products';
import AddProduct from '../views/AddProduct';
import Upload from '../views/Upload';
import Types from '../views/Types';
import AddStaff from '../views/AddStaff';
import EditProduct from '../views/EditProduct';

function App() {
  return (
    <>
      <PreLoader />
      <Login />

      {/* Home Section */}
      <section className="container-fluid" id="home-section">
        <div className="row">
          <Navbar />
          <Sidebar />
          <Products />
          <AddProduct />
          <EditProduct />
          <Upload />
          <Types />
          <AddStaff />
        </div>
      </section>
      {/* End Home Section */}
    </>
  );
}

export default App;
