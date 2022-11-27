import { React } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomeContainer } from "./components";
import LoginContainer from "./container/LoginContainer";
import RegisterContainer from "./container/RegisterContainer";
import Cart from "./container/Cart";

function App() {
  return (
    <div className="w-100 h-auto d-flex flex-column">
      <Navbar />
      <main className="w-100">
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
