import axios from "axios";

export const getAllStands = () => async (dispatch) => {
  dispatch({
    type: "GET_STAND_REQUEST",
  });

  try {
    const response = await axios.get("/api/stands/getallstands");
    // console.log(response);
    dispatch({
      type: "GET_STAND_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_STAND_FAILED",
      payload: error,
    });
  }
};
