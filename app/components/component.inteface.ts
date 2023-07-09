import { MouseEventHandler, ReactNode, Dispatch, SetStateAction } from "react"

export interface ISpan {
  size?: number
  weight?: string
  text? : string 
  color? : string
  balance? :number
  left?:number
  right?:number
}

export interface Iimg {
  img: string
}

export interface IWrap {
  width: number
  height: number
  flex: string
  back?:string
  left?: number
  top?: number
  right?:number
  border?: number
  direction? : string
  align? : string
  justify? : string
  radius1? :number
  radius2? :number
  radius3? :number
  radius4? :number
}

export type Token = "ETH" | "ARB" | "USDT" | "ASD" | "ARBLP"| "USDTLP"| "ETHLP"

export type TokenBalance = number

export interface PoolWrap{
  width: number
  height: number
  flex: string 
  left?: number
  right?: number
}

export interface ButtonCon{
  width?: number
  height? : number
  text? :string
  color? : string
  background? :string
  size?: number
  onclick?: any
  left?:number
  top?:number
}

export interface pairCon{
  text?:string
  text2?:string
  radius1? :number
  radius2? :number
  radius3? :number
  radius4? :number
  top?: number
}

export interface modalWrap{
  width?:number
  height?:number
  flex?:string
}
export interface modalHead{
  text? :string
  width?:number
  height?:number
  size? :number
  left? :number
  top? :number
  flex? :string
}

export interface ISwap {
  token: Token
  balance: TokenBalance
  top?: number
}

export interface IsetToken {
  from: Token
  frombalance: TokenBalance
  to: Token
  tobalance: TokenBalance
}

export interface ISwapData {
  swapData: IsetToken
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export interface IButton {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export interface ICustomModal {
  isOpen?: boolean;
  content?: ReactNode;
  onClose?: Dispatch<SetStateAction<boolean>>;
  width?: number;
  height?: number;
  left?: number;
}


export interface IPairSwap {
  token1?: Token
  balance1?: TokenBalance
  token2?: Token
  balance2?: TokenBalance
  }