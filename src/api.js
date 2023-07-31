import axios from 'axios';

const API_BASE_URL = 'https://reqres.in/api';

export const getUsers = (page) => {
  return axios.get(`${API_BASE_URL}/users?page=${page}`);
};
