import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  //baseURL: 'http://3.20.96.203:8000/api/v1/',
  baseURL: 'https://jsonplaceholder.typicode.com/todos/',

  headers: {
    Authorization: `Bearer`,
  },
})
