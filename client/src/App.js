import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./page/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./page/Auth/Signin/Signin";
import Signup from "./page/Auth/Signup/Signup";
import ProductDetail from "./page/ProductDetail/ProductDetail";
import Profile from "./page/Profile/Profile";
import ProtectedRoute from "./page/ProtectedRoute";
import Basket from "./page/Basket/Basket";
import Error from "./page/Error/Error";

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