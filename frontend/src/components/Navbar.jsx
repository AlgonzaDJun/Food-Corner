import React, { useState } from "react";
import navbarLogo from "../assets/navbarLogo.png";
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

  return (
    <div className="">
      <nav className="fixed w-screen bg-primary top-0 z-10 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 text-white shadow-lg">
        <div className="container flex flex-wrap justify-between items-center ">
          <a href="/" className="flex items-center">
            <img
              src={navbarLogo}
              className="mr-3 h-6 sm:h-9"
              alt="E-canteen Logo"
            />
            <span className="self-center text-xl text-headingColor font-semibold whitespace-nowrap dark:text-white">
              E-Canteen
            </span>
          </a>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="true"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={
              "w-full md:block md:w-auto" + (navbarOpen ? "w-full" : " hidden")
            }
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4  rounded-lg md:flex-row md:space-x-5 md:bg-inherit md:border-0 md:mt-0 md:font-bold dark:bg-gray-800">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pr-4 pl-3 md:hover:text-slate-800 hover:bg-gray-100 md:hover:bg-transparent rounded md:bg-transparent md:p-0 text-textColor text-textColor dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-800 md:p-0 text-textColor dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/cart"}
                  className="block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-800 md:p-0 text-textColor dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Cart {cartItems.length}
                </Link>
              </li>
              <li>
                {currentUser ? (
                  <>
                    <p
                      className="cursor-pointer block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-800 md:p-0 text-textColor dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-clip truncate"
                      onClick={() => setOpenLoginMenu(!openLoginMenu)}
                    >
                      {currentUser.name}
                    </p>
                    {openLoginMenu && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col relative top-70 md:top-12 md:right-96 md:right-3 md:absolute"
                      >
                        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base">
                          Pesanan <MdLogout />
                        </p>
                        <p
                          className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base"
                          onClick={() => dispatch(logoutUser())}
                        >
                          Log Out <MdLogout />
                        </p>
                      </motion.div>
                    )}
                  </>
                ) : (
                  <Link
                    to={"/login"}
                    className="block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-800 md:p-0 text-textColor dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
