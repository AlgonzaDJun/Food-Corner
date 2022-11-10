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
  