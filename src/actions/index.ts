import { USER_LOGIN } from "../constants";
import { UserInfo } from "../components/Header/Header";

export const userLogin = (userInfo: UserInfo) => {
  return {
    type: USER_LOGIN,
    data: userInfo
  }
}