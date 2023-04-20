import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const NavLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NavLayout;
