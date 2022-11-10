import { combineReducers } from "redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "@redux-devtools/extension";
import { getAllFoodsReducer } from "./reducers/foodReducers";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducers";
import { getAllStandsReducer } from "./reducers/standReducers";
import { cartReducer } from "./reducers/cartReducer";

const finalReducer = combineReducers({
  getAllFoodsReducer: getAllFoodsReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  getAllStandsReducer: getAllStandsReducer,
  cartReducer: cartReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  loginUserReducer: {
    currentUser: currentUser,
  },
  cartReducer: { cartItems: cartItems },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
