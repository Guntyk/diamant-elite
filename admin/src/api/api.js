import axios from 'axios';

export const backendApi = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

backendApi.interceptors.response.use(
  (response) => [null, response.data],
  (error) => [error, null]
);
