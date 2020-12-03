import { combineReducers } from "redux";
import { appReducer } from "./appRedducer";
import { productsReducer } from "./productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  app: appReducer
});

export default rootReducer;