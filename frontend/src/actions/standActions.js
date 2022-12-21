import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});


export const getAllStands = () => async (dispatch) => {
  dispatch({
    type: "GET_STAND_REQUEST",
  });

  try {
    const response = await axios.get("http://localhost:5000/api/stands/getallstands");
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

export const getOrders = () => async (dispatch) => {
  dispatch({
    type: "GET_ORDER_REQUEST",
  });

  try {
    const response = await instance.get("http://localhost:5000/api/orders/getstandorder");
    // console.log(response);
    dispatch({
      type: "GET_ORDER_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ORDER_FAILED",
      payload: error,
    });
  }
}
