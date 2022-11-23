import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import bg from "../assets/images/carousel.jpg";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerState;
  const [samePassword, SetSamePassword] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, []);

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

  const register = (e) => {
    e.preventDefault();
    SetSamePassword(false);
    if (state.password != state.confirmPassword) {
      SetSamePassword(true);
    } else {
      const user = {
        name: state.name,
        email: state.email,
        password: state.password,
      };
      // console.log(user);
      dispatch(registerUser(user));
    }
  };
  return (
    <div className="w-100">
      {/* <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            {loading && <Loading />}
            {success && <Success text={"Berhasil Registrasi"} />}
            {error && <Error text={error.response.data.error} />}
            {samePassword && <Error text={"password tidak sama"} />}
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Full Name"
              value={state.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              required
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
            <div class="text-grey-dark mt-6">
              Already have an account?
              <Link
                class="no-underline border-b border-blue text-blue ml-4"
                to={"/login"}
              >
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
      </div> */}
      <div
        class="login w-100"
        style={{ backgroundImage: `url(${bg})`, paddingTop: "100px" }}
      >
        <form class="form-signup">
          {loading && <Loading />}
          {success && <Success text={"Berhasil Registrasi"} />}
          {error && <Error text={error.response.data.error} />}
          {samePassword && <Error text={"password tidak sama"} />}
          <h2>Register</h2>
          <p className="text-center">Silakan melakukan registrasi akun.</p>
          <div class="form-group">
            <input
              type="text"
              class="form-control mb-3"
              name="name"
              placeholder="Nama Lengkap"
              value={state.name}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control mb-3"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control mb-3"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control mb-3"
              name="confirmPassword"
              placeholder="Konfirmasi Password"
              value={state.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button class="btn-login btn btn-dark btn-block" onClick={register}>
            Register
          </button>
          <p className="mt-3">
            Sudah Punya akun ? <Link to={"/login"}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterContainer;
