export const getAllFoodsReducer = (state = {foods : []}, action) => {
  switch (action.type) {
    case "GET_FOODS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_FOODS_SUCCESS":
      return {
        loading : false,
        foods: action.payload,
      };
    case "GET_FOODS_FAILED":
      return {
        loading : false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addFoodReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_FOOD_REQUEST":
      return {
        loading: true,
      };
    case "ADD_FOOD_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_FOOD_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const updateFoodReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_FOOD_REQUEST":
      return {
        loading: true,
      };
    case "UPDATE_FOOD_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "UPDATE_FOOD_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const deleteFoodReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_FOOD_REQUEST":
      return {
        loading: true,
      };
    case "DELETE_FOOD_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "DELETE_FOOD_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};