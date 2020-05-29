import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/api";

export const makeGetReq = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};

export const makePostReq = async (params) => {
  try {
    const response = await axios.post(params.url, params.data);
    return response;
  } catch (error) {
    window.alert("can't use this email");
    throw error;
  }
};
export const makeDeleteReq = async (url) =>
  await axios
    .delete(url)
    .then((res) => console.log(res))
    .catch((error) => {
      throw error;
    });
