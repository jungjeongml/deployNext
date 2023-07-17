"use client"

import { Token } from "@/app/components/component.inteface"
import { useEffect, useState } from "react"
import ChoiceBox from "./content/ChoiceBox"
import HaveBox from "./content/HaveBox"
import SubmitButton from "./content/SubmitButton"
import TokenAddressBox from "./content/TokenAddressBox"
import Write from "./content/Write"
import { ChangeCodeBox, Container, Title, Wrapper } from "./styled/page.styled"

const tokenCA = {
  ARB: "0x5e82193bb6E01a6A6aDda16e02Eb672C0662f21b",
  USDT: "0x302087FcAfF4021e7E3E915F022FEB69e425583b",
  ASD: "0x60940342dc533AcB28a6D7071fF338b32C24d3CF",
  ETH: "0x0cD8F89728315312722cf0803e8b3F253A761fbb",
  RETH: process.env.NEXT_PUBLIC_RETHTOKEN_ADDRESS,
  ARBLP: "0x5d60B86902E31ef9E8C785cF2fcF619c29682956",
  USDTLP: "0xE7b77522bC283000C1410b35B5347D5d2fd038B4",
  ETHLP: "0x655e54966E187b5D2c4cc0701eE38d6164675f6E",
}

const CreateProposal = () => {
  const [subjectValue, setSubjectValue] = useState("")
  const [contentValue, setContentValue] = useState("")
  const [selectToken, setSelectToken] = useState<Token | null>(null)
  const [tokenAddress, setTokenAddress] = useState<string | undefined>("")

  useEffect(() => {
    setTokenAddress(tokenCA[selectToken!])
  }, [selectToken])

  return (
    <Container>
      <Wrapper>
        <Title>Suggesting Vote</Title>
        <HaveBox></HaveBox>
        <ChoiceBox setSubject={setSubjectValue}></ChoiceBox>
        <TokenAddressBox token={selectToken} setToken={setSelectToken} tokenAddress={tokenAddress} setAddress={setTokenAddress}></TokenAddressBox>
        <Write subjectValue={subjectValue} contentValue={contentValue} setContentValue={setContentValue} />
        <SubmitButton subjectValue={subjectValue} contentValue={contentValue} selectToken={selectToken} tokenAddress={tokenAddress} />
      </Wrapper>
    </Container>
  )
}

export default CreateProposal
