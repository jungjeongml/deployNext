"use client"
import { Token } from "@/app/components/component.inteface"
import { ModalWrapST } from "@/app/components/modal2/styled"
import { ModalcontentST } from "@/app/components/modal2/styled"
import { Span } from "@/app/components/span/span"
import { SwapBox } from "@/app/components/swapbox"
import { Button } from "@/app/components/button/button"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store"
import { useFactory } from "@/app/hooks/usefactory"
import { useState, useEffect } from "react"
import { Contract, ethers } from "ethers"
import { useRouter } from "next/navigation"

interface IWithdrawPairModalContent {
  token: Token
}

const Arbadd = "0x5e82193bb6E01a6A6aDda16e02Eb672C0662f21b"
const Usdtadd = "0x302087FcAfF4021e7E3E915F022FEB69e425583b"
const Ethadd = "0x0cD8F89728315312722cf0803e8b3F253A761fbb"
const Asdadd = "0x60940342dc533AcB28a6D7071fF338b32C24d3CF"
const ArbLp = "0x5d60B86902E31ef9E8C785cF2fcF619c29682956"
const UsdtLp = "0xE7b77522bC283000C1410b35B5347D5d2fd038B4"
const EthLp = "0x655e54966E187b5D2c4cc0701eE38d6164675f6E"

export const WithdrawsingleModalContent = ({ token: token }: IWithdrawPairModalContent) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { provider, wallet, tokenPrice } = useSelector<RootState, RootState>((state) => state)
  const [differValue, setDifferValue] = useState(0)
  const [differamount, setDifferAmount] = useState(0)
  const [contractInstance, setContractInstance] = useState<Contract | null>(null)
  const [signerInstance, setsignerInstance] = useState<Contract | null>(null)

  const sWithdraw = async (signerInstance: Contract, differToken: string, differAmount: number) => {
    let lpAmount = ethers.utils.parseEther(differAmount.toString())
    const a = await signerInstance.Swithdraw(differToken, lpAmount, { gasLimit: 800000 })
  }

  useEffect(() => {
    if (provider.provider !== "none") {
      const contract = useFactory(provider.provider)
      setContractInstance(contract as Contract)
    }
  }, [provider])

  useEffect(() => {
    if (contractInstance) {
      const providers = new ethers.providers.Web3Provider(window.ethereum)
      const signer = providers.getSigner()
      setsignerInstance(contractInstance.connect(signer))
    }
  }, [contractInstance])

  const checkToken = async (signerInstance: Contract, token: Token) => {
    if (token === "ETH") {
      const { _hex: convert1 } = await signerInstance.sEth()
      const bigNumber1 = ethers.BigNumber.from(convert1)
      const converted1 = bigNumber1.toNumber()
      console.log(converted1)
      setDifferValue(converted1)
    } else if (token === "ARB") {
      const { _hex: convert1 } = await signerInstance.sArb()
      const bigNumber1 = ethers.BigNumber.from(convert1)
      const converted1 = bigNumber1.toNumber()
      setDifferValue(converted1)
    } else if (token === "USDT") {
      const { _hex: convert1 } = await signerInstance.sUsdt()
      const bigNumber1 = ethers.BigNumber.from(convert1)
      const converted1 = bigNumber1.toNumber()
      setDifferValue(converted1)
    }
  }
  useEffect(() => {
    if (!signerInstance) return
    checkToken(signerInstance, token)
  }, [signerInstance])

  const handleInputChange1 = (event: any) => {
    setDifferAmount(event.target.value)
  }

  const submitButton = (e: any) => {
    e.preventDefault()
    if (!signerInstance) return
    if (token === "ETH") {
      sWithdraw(signerInstance, Ethadd as string, differamount)
    } else if (token === "ARB") {
      sWithdraw(signerInstance, Arbadd as string, differamount)
    } else if (token === "USDT") {
      sWithdraw(signerInstance, Usdtadd as string, differamount)
    }
  }

  return (
    <>
      <ModalWrapST width={280} height={250}>
        <ModalcontentST width={280} height={100} flex={"true"}>
          <Span size={2.2} weight={"true"} text={"sub Liquidity"}></Span>
          <Span size={1.3} weight={"none"} text={"withdraw Amount"} left={0} color={"purple"}></Span>
        </ModalcontentST>
        <ModalcontentST width={280} height={150}>
          <SwapBox token={`${token}` as Token} balance={differValue} from={false} onInputChange={handleInputChange1}></SwapBox>
          <Button width={18} height={2} top={2} text={"WithDraw"} onclick={submitButton}></Button>
        </ModalcontentST>
      </ModalWrapST>
    </>
  )
}
