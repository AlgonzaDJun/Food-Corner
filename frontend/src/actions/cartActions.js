import axios from "axios";

export const addToCart = (menu, quantity, currentUser) => async (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems;
  //   var items = [];
  
  var cartItem = {
    currentUserId : currentUser._id,
    name: menu.name,
    standID: menu.standID,
    standName: menu.standName,
    _id: menu._id,
    image: menu.image,
    quantity: quantity,
    price: menu.price,
    prices: menu.price * quantity
  };

  try {
    const response = await axios.post("http://localhost:5000/api/users/addcart", cartItem)
    console.log(response);
    dispatch({ type: "ADD_TO_CART_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_TO_CART_FAILED", payload: error });
  }

  dispatch({ type: "ADD_TO_CART", payload: cartItem });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromcart = (menu) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: menu });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
