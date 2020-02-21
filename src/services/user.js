import API from "../axios";

export const userLogin = (data) => API.post('/login', data)