export const addToCart = (menu, quantity) => (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems;
  //   var items = [];

  var cartItem = {
    name: menu.name,
    standID: menu.standID,
    _id: menu._id,
    image: menu.image,
    quantity: quantity,
    price: menu.price,
    prices: menu.price * quantity,
  };

//   const same = cartItems.find(item => item._id === cartItem._id)

//   cartItems.map((item) => {
//     if (item._id === cartItem._id) {
//       item.quantity += 1;
//       return { ...cartItem, item };
//       //   dispatch({ type: "ADD_TO_CART", payload: item });
//     } else {
//       return cartItem;
//       //   dispatch({ type: "ADD_TO_CART", payload: cartItem });
//     }
//   });

  dispatch({ type: "ADD_TO_CART", payload: cartItem });
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
