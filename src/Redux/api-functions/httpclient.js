import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/api/v1';

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  // withCredentials: true
});

export default httpClient;
