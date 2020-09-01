/* istanbul ignore file  */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "../reducers";
//
const composeEnhancers = composeWithDevTools({
  name: "Redux - Exemplo ",
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
