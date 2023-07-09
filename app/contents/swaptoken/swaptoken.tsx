import { SwapBtn } from "@/app/components/buttons/swapbtn"
import { ISwapData } from "@/app/components/component.inteface"
import { ContentsWrapCenterST } from "@/app/components/contentswrap"
import { SwapBox } from "@/app/components/swapbox"
import { useEffect, useState } from "react"

export const SwapToken = ({ swapData, onClick }: ISwapData) => {
  useEffect(() => {}, [])

  return (
    <>
      <SwapBox token={swapData.from} balance={swapData.frombalance}></SwapBox>
      <ContentsWrapCenterST width={18} height={2} flex="true">
        <SwapBtn onClick={onClick} />
      </ContentsWrapCenterST>
      <SwapBox token={swapData.to} balance={swapData.tobalance}></SwapBox>
    </>
  )
}
