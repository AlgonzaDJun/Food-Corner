import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const getAllFoods = () => async (dispatch) => {
  dispatch({
    type: "GET_FOODS_REQUEST",
  });

  try {
    const response = await axios.get(
      "http://localhost:5000/api/foods/getallfoods"
    );
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

export const addNewFood = (name, price, image) => async (dispatch) => {
  dispatch({
    type: "ADD_FOOD_REQUEST",
  });

  try {
    const response = await instance.post(
      "http://localhost:5000/api/foods/createfood",
      {
        name,
        price,
        image,
      }
    );
    dispatch({
      type: "ADD_FOOD_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "ADD_FOOD_FAILED",
      payload: error.response.data,
    });
  }
};

export const updateFood = (name, price, image, idFood) => async (dispatch) => {
  dispatch({
    type: "UPDATE_FOOD_REQUEST",
  });

  try {
    const response = await instance.put(
      `http://localhost:5000/api/foods/${idFood}/updatefood`,
      {
        name,
        price,
        image,
      }
    );
    dispatch({
      type: "UPDATE_FOOD_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_FOOD_FAILED",
      payload: error.response.data,
    });
  }
};

export const deleteFood = (idFood) => async (dispatch) => {
  dispatch({
    type: "DELETE_FOOD_REQUEST",
  });

  try {
    const response = await instance.delete(
      `http://localhost:5000/api/foods/${idFood}/deletefood`
    );
    dispatch({
      type: "DELETE_FOOD_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_FOOD_FAILED",
      payload: error.response.data,
    });
  }
};
