import { React } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import { MainContainer } from "./components";
import LoginContainer from "./container/LoginContainer";
import RegisterContainer from "./container/RegisterContainer";
import Cart from "./container/Cart";

function App() {
  return (
    <div className="w-full h-auto flex flex-col bg-primary">
      <Navbar />
      <main className="mt-[60px] md:mt-[60px] px-4 md:px-16 py-4 w-full">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
