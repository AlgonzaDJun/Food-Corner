import axios from "axios";

export const placeOrder = (token, totalPrice) => async (dispatch, getState) => {
  //   var items = [];

  dispatch({
    type: "PLACE_ORDER_REQUEST",
  });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;

  try {
    const response = await axios.post("http://localhost:5000/api/orders/placeorders", {
      token,
      totalPrice,
      currentUser,
      cartItems,
    });
    // console.log(response);
    dispatch({
      type: "PLACE_ORDER_SUCCESS",
      //   payload: response.data,
    });
    console.log(response);
  } catch (error) {
    dispatch({
      type: "PLACE_ORDER_FAILED",
      //   payload: error,
    });
    console.log(error);
  }
};
