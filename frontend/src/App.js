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
import RoleAccess from "./components/RoleAccess";
import NavLayout from "./components/NavLayout";
import Menu from "./container/seller/pages/Menu";
import Order from "./container/seller/pages/Order";
// import Seller from "./container/seller/Seller";
import Admin from "./container/admin/Admin";
import Success from "./components/Success";

function App() {
  return (
    <div className="w-100 h-auto d-flex flex-column">
      <main className="w-100" style={{ backgroundColor: "#F3F3F5" }}>
        <Routes>
          <Route element={<NavLayout />}>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/register" element={<RegisterContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/checkoutdetails" element={<Checkout />}></Route>
          </Route>
          <Route element={<RoleAccess roles={["seller"]} />}>
            <Route path="/Seller" element={<Seller />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/order" element={<Order />} />
          </Route>
          <Route element={<RoleAccess roles={["admin"]} />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/sukses" element={<Success />} />
            
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
