import axios from "axios";

// define instance withCredentials so it can access token
const instance = axios.create({
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

// tambahkan item ke keranjang
export const addToCart = (menu, quantity) => async (dispatch) => {
  // const cartItems = getState().cartReducer.cartItems;
  //   var items = [];

  var cartItem = {
    name: menu.name,
    standID: menu.standID,
    standName: menu.standName,
    _id: menu._id,
    image: menu.image,
    quantity: quantity,
    price: menu.price,
    prices: menu.price * quantity,
  };
  dispatch({ type: "ADD_TO_CART_REQUEST", payload: cartItem });
  try {
    const response = await instance.post(
      "http://localhost:5000/api/users/addcart",
      cartItem
    );
    console.log(response);
    dispatch({ type: "ADD_TO_CART_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ADD_TO_CART_FAILED", payload: error });
  }

  // localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

// ubah kuantitas item di keranjang
export const incrementCart = (menu, quantity) => async (dispatch) => {
  // const cartItems = getState().cartReducer.cartItems;
  //   var items = [];

  var cartItem = {
    name: menu.name,
    standID: menu.standID,
    standName: menu.standName,
    _id: menu._id,
    image: menu.image,
    quantity: quantity,
    price: menu.price,
    prices: menu.price * quantity,
  };
  dispatch({ type: "INCREMENT_CART_REQUEST", payload: cartItem });
  try {
    const response = await instance.post(
      "http://localhost:5000/api/users/incrementcart",
      cartItem
    );
    // console.log(response);
    dispatch({ type: "INCREMENT_CART_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "INCREMENT_CART_FAILED", payload: error });
  }

  // localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromcart = (cartItem) => async (dispatch) => {
  dispatch({ type: "DELETE_FROM_CART_REQUEST" });

  try {
    const response = await instance.delete(
      "http://localhost:5000/api/users/removecart",
      { data: cartItem }
    );
    // console.log(response);
    dispatch({ type: "DELETE_FROM_CART_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "DELETE_FROM_CART_FAILED", payload: error });
  }
};

// mendapatkan data cart dari database
export const getCart = () => async (dispatch) => {
  dispatch({ type: "GET_CART_REQUEST" });
  try {
    const response = await instance.get(
      "http://localhost:5000/api/users/getcart"
    );
    dispatch({ type: "GET_CART_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_CART_FAILED", payload: error });
  }
};
