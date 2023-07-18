require('dotenv').config();

import axios from 'axios'
import config from './config'

console.log(process.env.DEVURL)
const request = axios.create({
  baseURL: process.env.DEVURL,
  headers: {
    "Content-Type":"application/json"
  }
})

export default request