import { Route, Routes } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import Authentication from './Pages/Authentication/Authentication';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import ContactUs from './Pages/ContactUs/ContactUs';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import Home from "./Pages/Home/Home";
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="bg-sky-100 font-roboto">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={
            <PrivateRoute>
            <Checkout />
            </PrivateRoute>
          }/>
          <Route path="/dashboard" element={
            <PrivateRoute>
            <Dashboard />
            </PrivateRoute>
          }>
            <Route index element={<ManageOrders/>} />
            <Route path="manageproducts" element={<AddProduct />} />

          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
