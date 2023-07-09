import RouterButton from "./routerButton"
import { ButtonWrap } from "./styled/airdropButtonWrapper.styled"

const ButtonWrapper = () => {
  return (
    <ButtonWrap>
      <RouterButton
        width={"150px"}
        height={""}
        color={"#fff"}
        padding={"10px 0px"}
        background={"#1fc7d4"}
        border={"none"}
        borderRadius={"16px"}
        fontSize={"16px"}
        fontFamily={""}
        fontWeight={"600"}
        cursor={"pointer"}
        letterSpacing={""}
        onClick={function (): void {
          throw new Error("Function not implemented.")
        }}
      >
        Join Drop
      </RouterButton>
      <RouterButton
        width={"150px"}
        height={""}
        color={"#fff"}
        padding={"10px 0px"}
        background={"#1fc7d4"}
        border={"none"}
        borderRadius={"16px"}
        fontSize={"16px"}
        fontFamily={""}
        fontWeight={"600"}
        cursor={"pointer"}
        letterSpacing={""}
        onClick={function (): void {
          throw new Error("Function not implemented.")
        }}
      >
        Receive Drop
      </RouterButton>
    </ButtonWrap>
  )
}

export default ButtonWrapper
