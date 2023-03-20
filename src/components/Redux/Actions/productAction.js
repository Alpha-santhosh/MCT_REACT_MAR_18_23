import { ActionType } from "../Constant/Action-type";

export const setCategory = (data) => {
  console.log("Action", data);
  return {
    type: ActionType.SET_CATEGORY_DATA,
    payload: data,
  };
};

export const setCategoryItem = (data) => {
  console.log("Action", data);
  return {
    type: ActionType.SET_CATEGORY_ITEM_DATA,
    payload: data,
  };
};
