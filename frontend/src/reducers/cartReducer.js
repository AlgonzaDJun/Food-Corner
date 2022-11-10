export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const duplicate = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (duplicate) {
        state.cartItems.map((item) => {
          //   return item._id === action.payload._id
          //     ? { ...item, quantity: item.quantity + action.payload.quantity }
          //     : item;

          if (item._id === action.payload._id) {
            return {
              ...item,
              quantity: (item.quantity += action.payload.quantity),
            };
          } else return item;
          // console.log(item._id)
        });

        // return [...state, (state.cartItems.quantity += 1)];

        // return "duplikat";
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
