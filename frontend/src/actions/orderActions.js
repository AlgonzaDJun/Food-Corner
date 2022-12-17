import axios from "axios";

export const placeOrder = (cartItems) => async (dispatch, getState) => {
  //   var items = [];

  dispatch({
    type: "PLACE_ORDER_REQUEST",
  });
  const currentUser = getState().loginUserReducer.currentUser;
  // const cartItems = getState().cartReducer.cartItems;

  let reducePrice = cartItems.reduce((x, item) => x + item.prices, 0)
  let totalPrice = reducePrice.toFixed(2)

  try {
    const response = await axios.post(
      "http://localhost:5000/api/orders/placeorders",
      {
        totalPrice,
        currentUser,
        cartItems,
      }
    );
    // console.log(response);
    dispatch({
      type: "PLACE_ORDER_SUCCESS"
    });
    localStorage.removeItem('cartItems')
  } catch (error) {
    dispatch({
      type: "PLACE_ORDER_FAILED",
      //   payload: error,
    });
    console.log(error);
  }
};
