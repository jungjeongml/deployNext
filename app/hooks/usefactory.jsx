import dotenv from "dotenv"
dotenv.config({ path: "../../.env" })
import { ethers } from "ethers"

const factoryABI = require("../../contracts/Factory_v1.sol/Factory_v1.json")

export const useFactory = (provider) => {
  if (!provider) return

  const factoryCA = "0xDfAEB4F9247a8F679Ad7546b72748C612e1fF2A4"
  const contract = new ethers.Contract(factoryCA, factoryABI.abi, provider)

  return contract
}
