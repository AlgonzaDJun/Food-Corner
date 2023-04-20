export const getAllStandsReducer = (state = {stands : []}, action) => {
    switch (action.type) {
      case "GET_STAND_REQUEST":
        return {
          loading: true,
          ...state,
        };
      case "GET_STAND_SUCCESS":
        return {
          loading : false,
          stands: action.payload,
        };
      case "GET_STAND_FAILED":
        return {
          loading : false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const getOrders = (state = {orders : []}, action) => {
    switch (action.type) {
      case "GET_ORDER_REQUEST":
        return {
          loading: true,
          ...state,
        };
      case "GET_ORDER_SUCCESS":
        return {
          loading : false,
          orders: action.payload,
        };
      case "GET_ORDER_FAILED":
        return {
          loading : false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const getFoodStand = (state = {foodStand : []}, action) => {
    switch (action.type) {
      case "GET_FOOD_STAND_REQUEST":
        return {
          loading: true,
          ...state,
        };
      case "GET_FOOD_STAND_SUCCESS":
        return {
          loading : false,
          foodStand: action.payload,
        };
      case "GET_FOOD_STAND_FAILED":
        return {
          loading : false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const getStandAdmin = (state = {stand : []}, action) => {
    switch (action.type) {
      case "GET_STAND_ADMIN_REQUEST":
        return {
          loading: true,
          ...state,
        };
      case "GET_STAND_ADMIN_SUCCESS":
        return {
          loading : false,
          stand: action.payload,
        };
      case "GET_STAND_ADMIN_FAILED":
        return {
          loading : false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const createStand = (state = {}, action) => {
    switch (action.type) {
      case "CREATE_STAND_REQUEST":
        return {
          loading: true,
          ...state,
        };
      case "CREATE_STAND_SUCCESS":
        return {
          loading : false,
          success: true,
        };
      case "CREATE_STAND_FAILED":
        return {
          loading : false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const updateStand = (state = {}, action) => {
    switch (action.type) {
      case "UPDATE_STAND_REQUEST":
        return {
          loading: true,
          ...state,
        };
      case "UPDATE_STAND_SUCCESS":
        return {
          loading : false,
          success: true,
        };
      case "UPDATE_STAND_FAILED":
        return {
          loading : false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const deleteStand = (state = {}, action) => {
    switch (action.type) {
      case "DELETE_STAND_REQUEST":
        return {
          loading: true,
          ...state,
        };
      case "DELETE_STAND_SUCCESS":
        return {
          loading : false,
          success: true,
        };
      case "DELETE_STAND_FAILED":
        return {
          loading : false,
          error: action.payload,
        };
      default:
        return state;
    }
  };