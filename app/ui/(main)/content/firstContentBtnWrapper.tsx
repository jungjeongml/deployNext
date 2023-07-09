"use client"

import RouterButton from "@/app/components/button/routerButton"
import { ButtonWrapper } from "../styled/firstContent.styled"
import { useRouter } from "next/navigation"

const FirstButtonWrapper = () => {
  const router = useRouter()
  return (
    <ButtonWrapper>
      <RouterButton
        width=""
        height="48px"
        color="#fff"
        padding="0px 24px"
        background="#1FC7D4"
        border="none"
        borderRadius="16px"
        fontSize="16px"
        fontFamily=""
        fontWeight="600"
        cursor="pointer"
        letterSpacing="0.03rem"
        onClick={() => {}}
      >
        Connect Wallet
      </RouterButton>
      <RouterButton
        width=""
        height="48px"
        color="#1FC7D4"
        padding="0px 24px"
        background="#fff"
        border="none"
        borderRadius="16px"
        fontSize="16px"
        fontFamily=""
        fontWeight="600"
        cursor="pointer"
        letterSpacing="0.03rem"
        onClick={() => {
          router.push("/swap")
        }}
      >
        Trade Now
      </RouterButton>
    </ButtonWrapper>
  )
}

export default FirstButtonWrapper
