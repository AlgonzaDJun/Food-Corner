import { React } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./container/Home";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Navbar />
      <main className="mt-[60px] md:mt-[77px] px-4 md:px-16 py-4 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
