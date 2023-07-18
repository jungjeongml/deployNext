require('dotenv').config();
const mode = process.env.MODE || "DEV"

const config = {
  dev:"http://localhost:3000",
  product:"https://jungml.shop",
  mode:process.env.MODE || "DEV"
}

export default config