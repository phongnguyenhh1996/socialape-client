import { USER_LOGIN_REQUEST } from "../constants";
import { UserInfo } from "../components/Header/Header";

export const userLogin = (userInfo: UserInfo) => {
  return {
    type: USER_LOGIN_REQUEST,
    data: userInfo
  }
}