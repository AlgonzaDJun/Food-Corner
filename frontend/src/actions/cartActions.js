export const addToCart = (menu, quantity) => (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems;
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

  dispatch({ type: "ADD_TO_CART", payload: cartItem });
  // localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromcart = (menu) => (dispatch) => {
  dispatch({ type: "DELETE_FROM_CART", payload: menu });
};
