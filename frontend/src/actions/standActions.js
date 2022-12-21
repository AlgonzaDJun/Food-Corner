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
    const response = await axios.get(
      "http://localhost:5000/api/stands/getallstands"
    );
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
    const response = await instance.get(
      "http://localhost:5000/api/orders/getstandorder"
    );
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
};

export const getFoodStand = () => async (dispatch) => {
  dispatch({
    type: "GET_FOOD_STAND_REQUEST",
  });

  try {
    const response = await instance.get(
      "http://localhost:5000/api/foods/getstandfood"
    );
    // console.log(response);
    dispatch({
      type: "GET_FOOD_STAND_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_FOOD_STAND_FAILED",
      payload: error,
    });
  }
};

export const getStandAdmin = () => async (dispatch) => {
  dispatch({
    type: "GET_STAND_ADMIN_REQUEST",
  });

  try {
    const response = await instance.get(
      "http://localhost:5000/api/stands/getstands"
    );
    // console.log(response);
    dispatch({
      type: "GET_STAND_ADMIN_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_STAND_ADMIN_FAILED",
      payload: error,
    });
  }
};

export const createStand =
  (name, email, password, standID) => async (dispatch) => {
    dispatch({
      type: "CREATE_STAND_REQUEST",
    });

    try {
      const response = await instance.post(
        "http://localhost:5000/api/stands/createstand",
        {
          name,
          email,
          password,
          standID,
        }
      );
      // console.log(response);
      dispatch({
        type: "CREATE_STAND_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "CREATE_STAND_FAILED",
        payload: error.message,
      });
    }
  };

export const editStand =
  (name, email, password, idStand) => async (dispatch) => {
    dispatch({
      type: "UPDATE_STAND_REQUEST",
    });

    try {
      const response = await instance.put(
        `http://localhost:5000/api/stands/${idStand}/updatestand`,
        {
          name,
          email,
          password
        }
      );
      // console.log(response);
      dispatch({
        type: "UPDATE_STAND_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_STAND_FAILED",
        payload: error,
      });
    }
  };

export const deleteStand = (idStand) => async (dispatch) => {
  dispatch({
    type: "DELETE_STAND_REQUEST",
  });

  try {
    const response = await instance.delete(
      `http://localhost:5000/api/stands/${idStand}/deletestand`
    );
    // console.log(response);
    dispatch({
      type: "DELETE_STAND_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_STAND_FAILED",
      payload: error,
    });
  }
};
