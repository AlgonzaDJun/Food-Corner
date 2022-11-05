import { combineReducers } from "redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "@redux-devtools/extension";
import { getAllFoodsReducer } from "./reducers/foodReducers";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducers";

const finalReducer = combineReducers({
  getAllFoodsReducer: getAllFoodsReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
});

const initialState = {};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
