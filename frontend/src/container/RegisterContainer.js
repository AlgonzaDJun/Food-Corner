import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterContainer = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const register = () => {
    if (state.password != state.confirmPassword) {
      alert("password not same");
    } else {
      const user = {
        name: state.name,
        email: state.email,
        password: state.password,
      };
      console.log(user)
    }
  };
  return (
    <>
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Full Name"
              value={state.name}
              onChange={handleChange}
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
            />

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
            />
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={state.confirmPassword}
              onChange={handleChange}
            />

            <button
              type="submit"
              onClick={register}
              class="w-full text-center py-3 rounded bg-green text-white bg-slate-900 hover:bg-green-900 focus:outline-none my-1"
            >
              Create Account
            </button>

            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <Link
                class="no-underline border-b border-grey-dark text-grey-dark"
                to={"/login"}
              >
                Terms of Service
              </Link>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account?
            <a
              class="no-underline border-b border-blue text-blue ml-4"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterContainer;
