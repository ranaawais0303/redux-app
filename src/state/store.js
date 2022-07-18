import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import reducer from "./reducers/amountReducer";

export const store = createStore(reducer, {}, applyMiddleware(thunk));
