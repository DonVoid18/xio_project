import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/users/donvoid18/repos",
});
