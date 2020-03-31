import { UserActionTypes } from "./user.types";

export const logIn = user => ({
  type: UserActionTypes.LOG_IN,
  payload: user
});

export const logOut = () => ({
  type: UserActionTypes.LOG_OUT,
  payload: null
});
