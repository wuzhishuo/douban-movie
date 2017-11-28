import {
  createAPI
} from '../util';
import config from '../config';

const baseUrl = {
  mock: 'https://www.easy-mock.com/mock/5a153b61f64292527e6639dc/api',
  dev: 'https://api.douban.com/v2/movie',
  pre: '',
  prod: ''
}[config.env || 'mock'];

module.exports = createAPI(baseUrl)