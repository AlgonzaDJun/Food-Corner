import axios from "axios";

export const getAllFoods = () => async (dispatch) => {
  dispatch({
    type: "GET_FOODS_REQUEST",
  });

  try {
    const response = await axios.get("http://localhost:5000/api/foods/getallfoods");
    console.log(response);
    dispatch({
      type: "GET_FOODS_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_FOODS_FAILED",
      payload: error,
    });
  }
};
