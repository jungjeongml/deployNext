import axios from 'axios'
import config from './config'

const request = axios.create({
  baseURL: `https://jungml.shop`,
  headers: {
    "Content-Type":"application/json"
  }
})

export default request