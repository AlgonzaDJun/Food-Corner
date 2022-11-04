import React, { useState } from "react";
import navbarLogo from "../assets/navbarLogo.png";
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="">
      <nav className="fixed w-screen bg-primary top-0 z-10 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 text-white shadow-lg">
        <div className="container flex flex-wrap justify-between items-center ">
          <a href="/" class="flex items-center">
            <img
              src={navbarLogo}
              class="mr-3 h-6 sm:h-9"
              alt="E-canteen Logo"
            />
            <span class="self-center text-xl text-headingColor font-semibold whitespace-nowrap dark:text-white">
              E-Canteen
            </span>
          </a>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="true"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            class={
              "w-full md:block md:w-auto" + (navbarOpen ? "w-full" : " hidden")
            }
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4  rounded-lg md:flex-row md:space-x-5 md:bg-inherit md:border-0 md:mt-0 md:font-bold dark:bg-gray-800">
              <li>
                <Link
                  to={"/"}
                  class="block py-2 pr-4 pl-3 md:hover:text-slate-800 hover:bg-gray-100 md:hover:bg-transparent rounded md:bg-transparent md:p-0 text-textColor text-textColor dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  class="block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-800 md:p-0 text-textColor dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  class="block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-800 md:p-0 text-textColor dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  class="block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-800 md:p-0 text-textColor dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
