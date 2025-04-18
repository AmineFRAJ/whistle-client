import { combineReducers } from "redux";
import matchReducer from "./matchReducer";
import newsReducer from "./newsReducer";  

const rootReducer = combineReducers({
  match: matchReducer,
  news: newsReducer,  
});

export default rootReducer;