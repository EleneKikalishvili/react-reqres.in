import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/api";

export const makeGetReq = (url) =>
  axios
    .get(url)
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
export const makePostReq = async (params) => {
  try {
    const response = await axios.post(params.url, params.data);
    return response;
  } catch (error) {
    window.alert("user doesn't exist");
    throw error;
  }
};
export const makeDeleteReq = (url) =>
  axios
    .delete(url)
    .then((res) => res)
    .catch((error) => {
      throw error;
    });
