import { combineReducers } from "redux";
import counterReducer from "../counter/reducers";

export default combineReducers({ counter: counterReducer });
