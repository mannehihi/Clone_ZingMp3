import axios from "../axios";

export const getHome = async () => {
  const response = await axios
    .get("/home")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
  return response;
};
