import { takeLatest } from "redux-saga/effects";
import { USER_LOGIN } from "../constants/index";

function* userLogin(action) {
  console.log(action);
  yield
}

export default function* login(){
  yield takeLatest(USER_LOGIN, userLogin)
}