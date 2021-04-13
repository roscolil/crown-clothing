import UserActionTypes from "./UserTypes";

const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})

export default setCurrentUser