import * as TYPES from "../constants";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.USER_LOGIN_REQUEST:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

export default reducer;