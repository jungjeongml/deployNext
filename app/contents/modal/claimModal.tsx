import { Button } from "@/app/components/button/button"
import { Token } from "@/app/components/component.inteface"
import { CustomModal, ModalcontentST, ModalWrapST } from "@/app/components/modal2/styled"
import { Span } from "@/app/components/span/span"
import { SwapBox } from "@/app/components/swapbox"
import { useFactory } from "@/app/hooks/usefactory"
import { RootState } from "@/redux/store"
import { Contract, ethers } from "ethers"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Arbadd = "0x5e82193bb6E01a6A6aDda16e02Eb672C0662f21b"
const Usdtadd = "0x302087FcAfF4021e7E3E915F022FEB69e425583b"
const Ethadd = "0x0cD8F89728315312722cf0803e8b3F253A761fbb"
const Asdadd = "0x60940342dc533AcB28a6D7071fF338b32C24d3CF"
const ArbLp = "0x5d60B86902E31ef9E8C785cF2fcF619c29682956"
const UsdtLp = "0xE7b77522bC283000C1410b35B5347D5d2fd038B4"
const EthLp = "0x655e54966E187b5D2c4cc0701eE38d6164675f6E"

interface IClaimModalContent {
  token: Token
}

const ClaimModalContent = ({ token }: IClaimModalContent) => {
  const { provider, wallet, tokenPrice } = useSelector<RootState, RootState>((state) => state)
  const [differValue, setDifferValue] = useState(0)
  const [contractInstance, setContractInstance] = useState<Contract | null>(null)
  const [signerInstance, setsignerInstance] = useState<Contract | null>(null)
  const [ethAmount, setEthAmount] = useState(0)
  const [arbAmount, setArbAmount] = useState(0)
  const [usdtAmount, setUsdtAmount] = useState(0)

  const [differamount, setDifferAmount] = useState(0)

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

  // const claimCheck = async(signerInstance: Contract, differToken:string)=>{
  //   const tx =await signerInstance.claimamountcheck(differToken,{
  //     maxFeePerGas: ethers.utils.parseUnits('20', 'gwei'),
  //   maxPriorityFeePerGas: ethers.utils.parseUnits('2', 'gwei'),
  //   gasLimit: 1000000,})
  //   await tx.wait()
  //   console.log(tx)
  // }

  // useEffect(() => {
  //   if (!signerInstance) return
  //   console.log(signerInstance)
  //   if (token === "ETH") {
  //     claimCheck(signerInstance, Ethadd as string )
  //   } else if (token === "ARB") {

  //   } else if (token === "USDT") {

  //   }
  // }, [signerInstance])

  const handleInputChange1 = (event: any) => {
    setDifferAmount(event.target.value)
  }
  const sclaim = async (signerInstance: Contract) => {
    let tx = await signerInstance.claimAmount(Asdadd as string)
    await tx.wait()
  }

  const submitButton = (e: any) => {
    e.preventDefault()
    if (!signerInstance) return
    console.log(signerInstance)
    if (token === "ETH") {
      sclaim(signerInstance)
    } else if (token === "ARB") {
      sclaim(signerInstance)
    } else if (token === "USDT") {
      sclaim(signerInstance)
    }
  }

  return (
    <>
      <ModalWrapST width={280} height={0}>
        <ModalcontentST width={280} height={100} flex={"true"}>
          <Span size={2.2} weight={"true"} text={"Claim APR"}></Span>
          <Span size={1.3} weight={"none"} text={"Thank you"} left={0} color={"purple"}></Span>
        </ModalcontentST>
        <ModalcontentST width={280} height={150} flex={"true"}>
          <SwapBox token={"ASD"} balance={0} from={false} onInputChange={handleInputChange1} display={"none"}></SwapBox>
          <Button width={18} height={3} top={1} text={"Claim"}></Button>
        </ModalcontentST>
      </ModalWrapST>
    </>
  )
}

interface IDepositModal {
  token?: string
}

export const ClaimModal = ({ token }: IDepositModal) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <>
      <Button width={4.503} height={2.2} top={0.5} onclick={() => setModalIsOpen(true)} text={"claim"}></Button>
      <CustomModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        width={340}
        height={350}
        left={17}
        content={<ClaimModalContent token={token as Token} />}
      />
    </>
  )
}
