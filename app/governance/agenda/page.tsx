"use client"

import HfLayout from "./content/hfLayout"
import {
  Board,
  BoardSubject,
  BoardWrapper,
  FInfo,
  FSubject,
  HInfo,
  HSubject,
  Header,
  HeaderWrapper,
  Index,
  IsChecked,
  IsVoting,
  Item,
  ItemSubject,
  Period,
} from "./styled"

import ButtonWrap from "./content/buttonWrap"
import { useRouter } from "next/navigation"

const list = [
  {
    index: "1",
    subject: "ASD Token level",
    startDate: "23.07.02",
    endDate: "23.07.05",
    progress: "true",
    join: "true",
  },
  {
    index: "2",
    subject: "ARB Token level",
    startDate: "23.07.02",
    endDate: "23.07.05",
    progress: "false",
    join: "false",
  },
]

const Agenda = () => {
  const router = useRouter()
  return (
    <>
      <HfLayout>
        <HeaderWrapper>
          <Header>
            <HSubject>Voting</HSubject>
            <HInfo>
              Have your say in the future of the CookieSwap Ecosystem
            </HInfo>
            <ButtonWrap margin="">Make a Proposal</ButtonWrap>
          </Header>
          <img src="https://pancakeswap.finance/images/voting/voting-presents.png" />
        </HeaderWrapper>
      </HfLayout>
      <BoardWrapper>
        <BoardSubject>Proposals</BoardSubject>
        <Board>
          {list.map((item) => (
            <Item
              key={item.index}
              onClick={() => {
                router.push(`/governance/agenda/${item.index}`)
              }}
            >
              <Index>{item.index}</Index>
              <ItemSubject>{item.subject}</ItemSubject>
              {item.progress === "true" ? (
                <IsVoting color="#1fc7d4">progress</IsVoting>
              ) : (
                <IsVoting color="red">passed</IsVoting>
              )}
              <Period>
                {item.startDate} ~ {item.endDate}
              </Period>
              {item.join === "true" ? (
                <IsChecked color="#1fc7d4">참여완료</IsChecked>
              ) : (
                <IsChecked color="#ff9632">미참여</IsChecked>
              )}
            </Item>
          ))}
        </Board>
      </BoardWrapper>
      <HfLayout>
        <HeaderWrapper>
          <Header>
            <FSubject>Got a suggestion ?</FSubject>
            <FInfo>
              Community proposals are a great way to see how the community feels
              about your ideas.
            </FInfo>
            <FInfo>
              They won't necessarily be implemented if the community votes
              successful, but suggestions with a lot of community support may be
              made into Core proposals.
            </FInfo>
            <ButtonWrap margin="10px">Make a Proposal</ButtonWrap>
          </Header>
          <img src="https://pancakeswap.finance/images/voting/voting-bunny.png" />
        </HeaderWrapper>
      </HfLayout>
    </>
  )
}

export default Agenda
