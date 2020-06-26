import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://test.autohome.com.cn:3001',
});

export default instance;
