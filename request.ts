import axios from 'axios'
import config from './config'
require('dotenv').config();

const request = axios.create({
  baseURL: `https://jungml.shop`,
  headers: {
    "Content-Type":"application/json"
  }
})

export default request