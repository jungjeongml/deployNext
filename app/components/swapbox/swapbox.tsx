import { Balance } from "../balance/balance"
import { ContentsWrapST } from "../contentswrap"
import { InputWrap } from "./inputwrap"
import { TokenName } from "../tokenname/token"
import { ISwap } from "../component.inteface"

export const SwapBox = ({ token, balance,top }: ISwap) => {
  return (
    <>
      <ContentsWrapST width={18} height={2} flex={"true"} top={top}>
        <TokenName token={token}></TokenName>
        <Balance balance={balance}></Balance>
      </ContentsWrapST>
      <InputWrap />
    </>
  )
}
