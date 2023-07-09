import { InputBox } from "../input/input"
import { InputBoxSpanST, InputWrapST } from "./styled"

export const InputWrap = () => {
  return (
    <InputWrapST>
      <InputBox id="amount" placeholder="0.0" />
      <InputBoxSpanST>~539,698,250.39 USD</InputBoxSpanST>
    </InputWrapST>
  )
}
