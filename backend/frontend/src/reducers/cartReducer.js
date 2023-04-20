export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CART_REQUEST":
      return {
        loading: true,
      };
    case "ADD_TO_CART_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_TO_CART_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    case "INCREMENT_CART_REQUEST":
      return {
        loading: true,
      };
    case "INCREMENT_CART_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "INCREMENT_CART_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    case "DELETE_FROM_CART_REQUEST":
      return {
        loading: true,
      };
    case "DELETE_FROM_CART_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "DELETE_FROM_CART_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "GET_CART_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_CART_SUCCESS":
      return {
        loading: false,
        cartItems: action.payload,
      };
    case "GET_CART_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
