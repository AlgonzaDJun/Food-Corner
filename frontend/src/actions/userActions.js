import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/register",
      user
    );
    console.log(response);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
    // localStorage.setItem("currentUser", JSON.stringify(response.data));
    // window.location.href= "/"
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/login",
      user,
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));

    if (response.data.role === "user") {
      window.location.href = "/";
    } else if (response.data.role === "admin") {
      window.location.href = "/admin";
    } else if (response.data.role === "seller") {
      window.location.href = "/seller";
    }
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};
