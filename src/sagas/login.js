import { takeLatest, put } from "redux-saga/effects";
import { USER_LOGIN_REQUEST } from "../constants/index";
import API from "../axios";

function* userLogin(action) {
  console.log(action);
  yield
}

export default function* login(){
  yield takeLatest(USER_LOGIN_REQUEST, userLogin)
}