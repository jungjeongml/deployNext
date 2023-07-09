"use client"

import RouterButton from "@/app/components/button/routerButton"
import { SubmitButtonWrapper } from "../styled/page.styled"

const SubmitButton = () => {
  return (
    <SubmitButtonWrapper>
      <RouterButton
        width={"400px"}
        height={"50px"}
        color={"#1FC7D4"}
        padding={""}
        background={"#fff"}
        border={"none"}
        borderRadius={"16px"}
        fontSize={"24px"}
        fontFamily={""}
        fontWeight={"600"}
        cursor={"pointer"}
        letterSpacing={"1.1"}
        onClick={() => {}}
      >
        Submit Proposal
      </RouterButton>
    </SubmitButtonWrapper>
  )
}

export default SubmitButton
