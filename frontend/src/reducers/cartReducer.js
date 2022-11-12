export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const duplicate = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (duplicate) {
        state.cartItems.map((item) => {
          if (item._id === action.payload._id) {
            return {
              ...item,
              quantity: (item.quantity += action.payload.quantity),
              prices : item.prices = item.quantity * item.price,
            };
          } else return item;
        });
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    default:
      return state;
  }
};
