import axios from 'axios';
import config from '../config';

const createInstance = (req) => axios.create({
  baseURL: 'http://test.autohome.com.cn:3001',
  params: {
    secret: config.secret,
  },
  headers: {
    cookie: req.get('cookie'),
  },
});

export default createInstance;
