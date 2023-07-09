import { useCallback, useEffect, useRef } from "react"
import {
  AirdropInfo,
  AirdropPeriod,
  AirdropPeriodDate,
  AirdropPeriodTxT,
  ModalContainer,
  ModalContent,
  ModalOuter,
  MyAirdropAmount,
  MyAirdropTxT,
  RewardDate,
  TotalAirdropAmount,
  TotalAirdropAmountTxT,
  TotalAirdropAmountValue,
} from "./styled/airdrop.styled"
import ButtonWrapper from "../../components/button/airdropButtonWrapper"

const AirdropModal = ({
  setIsOpen,
  index,
}: {
  setIsOpen: (value: boolean) => void
  index: number
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handler = useCallback(
    (e: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    },
    [wrapperRef.current]
  )

  useEffect(() => {
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  console.log(index) //index로 구분해서 데이터 받아오기.

  return (
    <ModalOuter>
      <ModalContainer ref={wrapperRef}>
        <ModalContent>
          <MyAirdropTxT>My Airdrop</MyAirdropTxT>
          <MyAirdropAmount>
            <strong>0</strong> oMEGA
          </MyAirdropAmount>
          <RewardDate>Enable reward Date: 2023.07.09 09:00</RewardDate>
          <ButtonWrapper />
          <AirdropInfo>
            <AirdropPeriod>
              <AirdropPeriodTxT>Airdrop Date</AirdropPeriodTxT>
              <AirdropPeriodDate>2023.07.09 ~ 2023.07.11</AirdropPeriodDate>
            </AirdropPeriod>
            <TotalAirdropAmount>
              <TotalAirdropAmountTxT>Total Airdrop</TotalAirdropAmountTxT>
              <TotalAirdropAmountValue>
                100,000.0000000 oMEGA
              </TotalAirdropAmountValue>
            </TotalAirdropAmount>
          </AirdropInfo>
        </ModalContent>
      </ModalContainer>
    </ModalOuter>
  )
}

export default AirdropModal
