import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./page/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./page/Auth/Signin/Signin";
import Signup from "./page/Auth/Signup/Signup";
import ProductDetail from "./page/ProductDetail/ProductDetail";
import Profile from "./page/Profile/Profile";
import ProtectedRoute from "./page/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:product_id" element={<ProductDetail />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  )
};

export default App;