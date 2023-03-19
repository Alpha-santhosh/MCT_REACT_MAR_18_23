import { ActionType } from "../Constant/Action-type";

export const setUserData = (data) => {
  // console.log("Action is called for All", data);
  return {
    type: ActionType.GET_ALL_USER_DATA,
    payload: data,
  };
};

export const setmaleData = (data) => {
  // console.log("Action is called for Male", data);
  return {
    type: ActionType.GET_ALL_MALE_DATA,
    payload: data,
  };
};

export const setfemaledata = (data) => {
  // console.log("Action is called for female", data);
  return {
    type: ActionType.GET_ALL_FEMALE_DATA,
    payload: data,
  };
};
