import axios from "axios";

const API_URL = "http://localhost:5500/api/users/";

const signup = (email, password, username) => {
  return axios
    .post(API_URL + "/signup", {
      email,
      password,
      username,
    })
    .then((response) => {
      console.log(response);

      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.token) {
        localStorage.setItem("token", "Bearer " + response.data.token);
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  signup,
  login,
  logout,
};

export default authService;
