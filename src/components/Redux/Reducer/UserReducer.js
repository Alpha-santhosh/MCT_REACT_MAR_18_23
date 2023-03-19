import { ActionType } from "../Constant/Action-type";

const intialState = {
  allUserData: [],
  allMaleData: [],
  allFemaleData: [],
};

export const userReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionType.GET_ALL_USER_DATA:
      // console.log("reduces is called for all", payload);
      return { ...state, allUserData: payload };
    case ActionType.GET_ALL_MALE_DATA:
      // console.log("reduces is called for Male", payload);
      return { ...state, allMaleData: payload };
    case ActionType.GET_ALL_FEMALE_DATA:
      // console.log("reduces is called for female", payload);
      return { ...state, allFemaleData: payload };
    default:
      return state;
  }
};
