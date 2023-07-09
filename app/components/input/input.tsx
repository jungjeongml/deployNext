import { InputST } from "./styled"

export const InputBox = (props: { id: string; placeholder: string }) => {
  return (
    <>
      <InputST id={props.id} placeholder={props.placeholder} />
    </>
  )
}
