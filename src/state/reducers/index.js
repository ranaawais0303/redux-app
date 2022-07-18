import { combineReducers } from "redux";
import amountReducer, { reducer } from "./amountReducer";
const reducers = combineReducers({
  amount: amountReducer,
});

export default reducers;
