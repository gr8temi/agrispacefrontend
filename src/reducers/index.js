import { combineReducers } from "redux";
import infoReducer from "./infoReducer";

export default combineReducers({ information: infoReducer });
