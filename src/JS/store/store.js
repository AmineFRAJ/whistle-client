import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; // ✅ correct for your version
import rootReducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;