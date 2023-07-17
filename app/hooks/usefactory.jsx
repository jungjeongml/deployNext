import dotenv from "dotenv"
dotenv.config({ path: "../../.env" })
import { ethers } from "ethers"

const factoryABI = require("../../contracts/Factory_v1.sol/Factory_v1.json")

export const useFactory = (provider) => {
  if (!provider) return
  const factoryCA = "0x6131D1Ba5E526d0186bA41d15E16bC0071A80DE7"
  const contract = new ethers.Contract(factoryCA, factoryABI.abi, provider)
  return contract
}
