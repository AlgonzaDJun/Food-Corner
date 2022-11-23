import React, { useState } from "react";
import navbarLogo from "../assets/images/logo2.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { MdLogout } from "react-icons/md";
import { logoutUser } from "../actions/userActions";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openLoginMenu, setOpenLoginMenu] = useState(false);

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.loginUserReducer);
  const cartState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartState;

  const { currentUser } = userState;

  console.log(currentUser)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 fixed-top">
        <div className="container">
          <a
            className="navbar-brand d-flex justify-content-between align-items-center order-lg-0"
            href="/"
          >
            <img src={navbarLogo} alt="site icon" />
            <h4 className="text-capitalize fw-lighter ms-2">FooD CorneR</h4>
          </a>
          <div className="order-lg-2 nav-btns">
            <button type="button" className="btn position-relative">
              <li className="nav-item d-flex">
                <a className="nav-link ml-auto" href="cart.html">
                  <i className="uil uil-shopping-bag"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
                    8
                  </span>
                </a>
              </li>
            </button>
            <button type="button" className="btn position-relative">
              <i className="uil uil-user"></i>
            </button>
            <button type="button" className="btn position-relative">
              <li className="nav-item d-flex">
                <div
                  className="collapse fade mt-5 position-absolute"
                  id="searchForm"
                  style={{ width: "300px", right: "35px", height: "30px" }}
                >
                  <input
                    id="search"
                    type="search"
                    className="form-control-lg border-0 bg-light "
                    placeholder="Cari Produk"
                  />
                </div>
                <a
                  className="nav-link ml-auto"
                  href="#searchForm"
                  data-bs-target="#searchForm"
                  data-bs-toggle="collapse"
                >
                  <i className="uil uil-search"></i>
                </a>
              </li>
            </button>
          </div>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse order-lg-1" id="navMenu">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item px-2 py-2">
                <a className="nav-link text-capitalize text-dark" href="index.html">
                  home
                </a>
              </li>
              <li className="nav-item px-2 py-2">
                <a
                  className="nav-link text-capitalize text-dark"
                  href="collection.html"
                >
                  collection
                </a>
              </li>
              <li className="nav-item px-2 py-2">
                <a className="nav-link text-capitalize text-dark" href="blogs.html">
                  blogs
                </a>
              </li>
              <li className="nav-item px-2 py-2">
                <a
                  className="nav-link text-capitalize text-dark"
                  href="aboutUs.html"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item px-2 py-2 border-0">
                <a
                  className="nav-link text-capitalize text-dark"
                  href="contact.html"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
