export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "PLACE_ORDER_REQUEST":
      return {
        loading: true,
      };
    case "PLACE_ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "PLACE_ORDER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getOrderReducer = (state = { orderItems: [] }, action) => {
  switch (action.type) {
    case "GET_ORDER_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_ORDER_SUCCESS":
      return {
        loading: false,
        orderItems: action.payload,
      };
    case "GET_ORDER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderPaidReducer = (state = {}, action) => {
  switch (action.type) {
    case "PAID_ORDER_REQUEST":
      return {
        loading: true,
      };
    case "PAID_ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "PAID_ORDER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const orderDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELIVER_ORDER_REQUEST":
      return {
        loading: true,
      };
    case "DELIVER_ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "DELIVER_ORDER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};