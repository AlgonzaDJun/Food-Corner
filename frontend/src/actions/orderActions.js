import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const placeOrder =
  (cartItems, eatPlace) => async (dispatch, getState) => {
    //   var items = [];

    dispatch({
      type: "PLACE_ORDER_REQUEST",
    });
    const currentUser = getState().loginUserReducer.currentUser;
    // const cartItems = getState().cartReducer.cartItems;

    let reducePrice = cartItems.reduce((x, item) => x + item.prices, 0);
    let totalPrice = reducePrice.toFixed(2);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/orders/placeorders",
        {
          totalPrice,
          currentUser,
          cartItems,
          eatPlace,
        }
      );
      // console.log(response);
      dispatch({
        type: "PLACE_ORDER_SUCCESS",
      });
      localStorage.removeItem("cartItems");
    } catch (error) {
      dispatch({
        type: "PLACE_ORDER_FAILED",
        //   payload: error,
      });
      console.log(error);
    }
  };

// mendapatkan data cart dari database
export const getOrder = () => async (dispatch) => {
  dispatch({ type: "GET_ORDER_REQUEST" });
  try {
    const response = await instance.get(
      "http://localhost:5000/api/orders/getuserorder"
    );
    dispatch({ type: "GET_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ORDER_FAILED", payload: error });
  }
};

export const orderPaid = (idOrder, idItem) => async (dispatch) => {
  dispatch({ type: "PAID_ORDER_REQUEST" });
  try {
    const response = await instance.put(
      `http://localhost:5000/api/orders/${idOrder}/${idItem}/pay`
    );
    dispatch({ type: "PAID_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "PAID_ORDER_FAILED", payload: error });
  }
};

export const orderDelivered = (idOrder, idItem) => async (dispatch) => {
  dispatch({ type: "DELIVER_ORDER_REQUEST" });
  try {
    const response = await instance.put(
      `http://localhost:5000/api/orders/${idOrder}/${idItem}/deliver`
    );
    dispatch({ type: "DELIVER_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "DELIVER_ORDER_FAILED", payload: error });
  }
};
