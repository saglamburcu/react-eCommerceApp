import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./page/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./page/Auth/Signin/Signin";
import Signup from "./page/Auth/Signup/Signup";
import ProductDetail from "./page/ProductDetail/ProductDetail";
import Profile from "./page/Profile/Profile";
import ProtectedRoute from "./page/ProtectedRoute";
import Protected from "./page/Protected";
import Basket from "./page/Basket/Basket";
import Error from "./page/Error/Error";
import Admin from "./page/Admin/Admin";
import Home from "./page/Admin/Home/Home";
import Product from "./page/Admin/Product/Product";
import Orders from "./page/Admin/Orders/Orders";
import OrdersDetail from "./page/Admin/Orders/OrdersDetail";
import Details from "./page/Admin/Product/Details";
import New from "./page/Admin/Product/New";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:product_id" element={<ProductDetail />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/admin" element={
          <Protected>
            <Admin />
          </Protected>
        } >
          <Route path="/admin" element={<Home />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/orders/:order_id" element={<OrdersDetail />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/product/:product_id" element={<Details />} />
          <Route path="/admin/product/new" element={<New />} />
        </Route>
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;