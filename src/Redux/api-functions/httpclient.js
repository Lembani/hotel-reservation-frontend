import axios from 'axios';

const BASE_URL = 'https://stark-badlands-38572.herokuapp.com/api/v1';

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  // withCredentials: true
});

export default httpClient;
