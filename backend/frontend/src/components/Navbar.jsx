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
  const [openProfilMenu, setOpenProfilMenu] = useState(false);

  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.getCartReducer);
  const { cartItems } = cartState;

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  // console.log(currentUser);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  fixed-top">
        <div className="container">
          <Link
            className="navbar-brand d-flex justify-content-between align-items-center order-lg-0"
            to={"/"}
          >
            <img src={navbarLogo} alt="site icon" />
            <h4 className="text-capitalize fw-lighter ms-2">FooD CorneR</h4>
          </Link>
          <div className="order-lg-2 nav-btns">
            <button type="button" className="btn position-relative">
              <li className="nav-item d-flex">
                <Link className="nav-link ml-auto" to={"/cart"}>
                  <i className="uil uil-shopping-bag"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
                    {currentUser && cartItems.length}
                  </span>
                </Link>
              </li>
            </button>
            {currentUser ? (
              <button
                onClick={() => setOpenLoginMenu(!openLoginMenu)}
                className="btn position-relative mt-4"
              >
                <h5 className="rounded-circle border border-1 p-2 text-truncate">
                  {currentUser.name}
                </h5>
                {openLoginMenu && (
                  <motion.div
                    style={{
                      display: "flex",
                      position: "absolute",
                      backgroundColor: "#F9FAFB",
                      flexDirection: "column",
                      width: "10rem",
                      borderRadius: "0.5rem",
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="rounded-2"
                  >
                    <Link className="text-decoration-none text-black" to={"/checkoutdetails"}>
                      <p>Pesanan saya</p>
                    </Link>
                    <button
                      className="btn"
                      onClick={() => dispatch(logoutUser())}
                    >
                      <p>Log Out</p>
                    </button>
                  </motion.div>
                )}
              </button>
            ) : (
              <button
                onClick={() => setOpenProfilMenu(!openProfilMenu)}
                className="btn position-relative"
              >
                <i className="uil uil-user"></i>
                {openProfilMenu && (
                  <motion.div
                    style={{
                      display: "flex",
                      position: "absolute",
                      backgroundColor: "#F9FAFB",
                      flexDirection: "column",
                      width: "100px",
                      borderRadius: "0.5rem",
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="rounded-2"
                  >
                    <Link
                      className="p-0 pt-2 m-0 text-decoration-none text-black"
                      to={"/login"}
                    >
                      <p>Login</p>
                    </Link>
                    <Link
                      className="p-0 m-0 text-decoration-none text-black"
                      to={"/register"}
                    >
                      <p>Register</p>
                    </Link>
                  </motion.div>
                )}
              </button>
            )}

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
                <Link className="nav-link text-capitalize text-dark" to={"/"}>
                  home
                </Link>
              </li>
              <li className="nav-item px-2 py-2">
                <a className="nav-link text-capitalize text-dark" href="#menu">
                  collection
                </a>
              </li>
              {/* <li className="nav-item px-2 py-2">
                <a className="nav-link text-capitalize text-dark" href="#aboutUs">
                  blogs
                </a>
              </li> */}
              <li className="nav-item px-2 py-2">
                <a
                  className="nav-link text-capitalize text-dark"
                  href="#aboutUs"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item px-2 py-2 border-0">
                <a
                  className="nav-link text-capitalize text-dark"
                  href="contact"
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
