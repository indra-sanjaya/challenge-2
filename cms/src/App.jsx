import Login from '../views/Login';
import Products from '../views/Products';
import AddProduct from '../views/AddProduct';
import Upload from '../views/Upload';
import Types from '../views/Types';
import AddStaff from '../views/AddStaff';
import EditProduct from '../views/EditProduct';
import { BrowserRouter, Routes, Route } from 'react-router';
import BaseLayout from '../views/BaseLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<BaseLayout />}>
            <Route path="/register" element={<AddStaff />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path="/upload/:id" element={<Upload />} />
            <Route path="/types" element={<Types />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ,
    </>
  );
}

export default App;
