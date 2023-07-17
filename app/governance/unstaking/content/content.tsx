"use client"

import { Content, ContentWrapper, StakingReward } from "../styled/page.styled"
import RewardArea from "./rewardArea"
import StakingArea from "./stakingArea"
import { useEffect, useState } from "react"
import BasicButton from "@/app/components/button/BasicBtn"
import { Contract, ethers } from "ethers"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { RootState } from "@/redux/store"
import { useFactory } from "@/app/hooks/usefactory"

const Arbadd = "0x5e82193bb6E01a6A6aDda16e02Eb672C0662f21b"
const Usdtadd = "0x302087FcAfF4021e7E3E915F022FEB69e425583b"
const Ethadd = "0x0cD8F89728315312722cf0803e8b3F253A761fbb"
const Asdadd = "0x60940342dc533AcB28a6D7071fF338b32C24d3CF"
const ArbLp = "0x5d60B86902E31ef9E8C785cF2fcF619c29682956"
const UsdtLP = "0xE7b77522bC283000C1410b35B5347D5d2fd038B4"
const EthLP = "0x655e54966E187b5D2c4cc0701eE38d6164675f6E"

const StakingContent = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { provider, wallet, tokenPrice } = useSelector<RootState, RootState>((state) => state)

  const [submissionPeriod, setSubmissionPeriod] = useState(0)
  const [submissionAmount, setSubmissionAmount] = useState(0)
  const [submissionLp, setSubmissionLp] = useState("")
  const [contractInstance, setContractInstance] = useState<Contract | null>(null)
  const [signerInstance, setsignerInstance] = useState<Contract | null>(null)

  const handleSubmissionPeriod = (param: number) => {
    setSubmissionPeriod(param)
  }
  const handleSubmissionAmount = (param: number) => {
    setSubmissionAmount(param)
  }

  const handleSubmissionLp = (param: string) => {
    setSubmissionLp(param)
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

  const unSubmitButton = (e: any) => {
    e.preventDefault()
    if (!signerInstance) return
    let parseAmount = ethers.utils.parseEther(submissionAmount.toString())
    if (submissionLp === "ARBLP") {
      let realPeriod = submissionPeriod
      signerInstance.withDrawStaking(ArbLp, parseAmount, { gasLimit: 508388 })
    } else if (submissionLp === "USDTLP") {
      let realPeriod = submissionPeriod
      signerInstance.withDrawStaking(UsdtLP, parseAmount, { gasLimit: 508388 })
    } else if (submissionLp === "ETHLP") {
      let realPeriod = submissionPeriod
      signerInstance.withDrawStaking(EthLP, parseAmount, { gasLimit: 508388 })
    }
  }

  return (
    <Content>
      <ContentWrapper>
        <StakingReward>
          <StakingArea
            handleSubmissionPeriod={handleSubmissionPeriod}
            handleSubmissionAmount={handleSubmissionAmount}
            handleSubmissionLp={handleSubmissionLp}
          />
        </StakingReward>
        <form>
          <BasicButton
            text="withDraw Staking !"
            padding="24px"
            borderRadius="16px"
            fontSize="16px"
            fontWeight="600"
            background="#1fc7d4"
            margin-left="1rem"
            color="#fff"
            left={1}
            onClick={unSubmitButton}
          />
        </form>
      </ContentWrapper>
    </Content>
  )
}

export default StakingContent
