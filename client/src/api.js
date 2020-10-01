import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4242/api/v1/messages',
});

export default instance;
