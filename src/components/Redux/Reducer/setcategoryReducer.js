import { ActionType } from "../Constant/Action-type";

const intialProducts = {
  AllsetCategory: [],
  categoryItemData: [],
};

export const setCategoryReducer = (
  state = intialProducts,
  { type, payload }
) => {
  switch (type) {
    case ActionType.SET_CATEGORY_DATA:
      console.log("Reducering", payload);
      return { ...state, AllsetCategory: payload };
    case ActionType.SET_CATEGORY_ITEM_DATA:
      console.log("Reducering", payload);
      return { ...state, categoryItemData: payload };

    default:
      return state;
  }
};
