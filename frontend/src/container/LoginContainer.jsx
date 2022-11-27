import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import bg from "../assets/images/carousel.jpg";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginState;

  // useEffect(() => {
  //   if (localStorage.getItem("currentUser")) {
  //     navigate("/");
  //   }
  // }, []);

  const login = (e) => {
    e.preventDefault();
    const currentUser = {
      email: email,
      password: password,
    };
    dispatch(loginUser(currentUser));
  };
  return (
    <div className=" w-100">
      <div
        class="login w-100"
        style={{ backgroundImage: `url(${bg})`, paddingTop: "150px" }}
      >
        <form class="form-signup">
          {loading && <Loading />}
          {error && <Error text={"Silakan periksa email dan password"} />}
          <h2>Login</h2>
          <p>Silakan Memasukkan username dan password</p>
          <div class="form-group">
            <input
              value={email}
              type="email"
              name="email"
              class="form-control mb-3"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group">
            <input
              value={password}
              type="password"
              name="password"
              class="form-control mb-3"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={login} class="btn-login btn btn-dark btn-block">
            Login
          </button>
          <p className="mt-3">
            Belum Punya akun ? <Link to={"/register"}>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginContainer;
