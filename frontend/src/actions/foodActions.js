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
      payload: error,
    });
  }
};
