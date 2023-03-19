import { createStore } from "redux";
import rootReducer from "./Reducer/RootReducer";

export const store = createStore(rootReducer);
