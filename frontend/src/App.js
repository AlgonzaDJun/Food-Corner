import { React } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomeContainer } from "./components";
import LoginContainer from "./container/LoginContainer";
import RegisterContainer from "./container/RegisterContainer";
import Cart from "./container/Cart";
import Checkout from "./container/Checkout";
import Contact from "./container/Contact";
import Seller from "./container/seller/Seller";

function App() {
  return (
    <div className="w-100 h-auto d-flex flex-column">
      <Navbar />
      <main className="w-100" style={{backgroundColor: '#F3F3F5'}}>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Seller" element={<Seller />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/checkoutdetails" element={<Checkout/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
