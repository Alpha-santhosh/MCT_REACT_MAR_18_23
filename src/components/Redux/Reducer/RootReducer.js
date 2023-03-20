import { combineReducers } from "redux";
import { setCategoryReducer } from "./setcategoryReducer";
import { userReducer } from "./UserReducer";

const rootReducer = combineReducers({
  AllUserData: userReducer,
  ProductsData: setCategoryReducer,
});

export default rootReducer;
