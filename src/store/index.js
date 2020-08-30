/* istanbul ignore file  */
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "../reducers";
//
const composeEnhancers = composeWithDevTools({
  name: "Redux - Exemplo ",
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(rootReducer, {}, composeEnhancers());
export default store;
