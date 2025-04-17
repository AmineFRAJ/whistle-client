import { combineReducers } from "redux";
import matchReducer from "./matchReducer";

const rootReducer = combineReducers({
  match: matchReducer,
});

export default rootReducer;