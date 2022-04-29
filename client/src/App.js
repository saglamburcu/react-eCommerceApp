import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/pages/Auth/Signup/Signup";
import Signin from "./components/pages/Auth/Signin/Signin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;