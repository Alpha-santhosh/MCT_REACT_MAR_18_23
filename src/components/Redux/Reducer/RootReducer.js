import { combineReducers } from "redux";
import { userReducer } from "./UserReducer";

const rootReducer = combineReducers({ AllUserData: userReducer });

export default rootReducer;
