import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/api";

export const makeGetReq = (url) =>
  axios
    .get(url)
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
export const makePostReq = (params) =>
  axios
    .post(params.url, params.data)
    .then((res) => localStorage.setItem("Token", res.data.token))
    .catch((error) => {
      window.alert("this user does't exist");
      throw error;
    });
export const makeDeleteReq = (url) =>
  axios
    .delete(url)
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
