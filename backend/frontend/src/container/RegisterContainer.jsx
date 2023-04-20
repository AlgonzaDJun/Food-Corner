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
    if (state.password !== state.confirmPassword) {
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
