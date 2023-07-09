import {
  SubjectWrapper,
  MyAmount,
  MyAmountBox,
  SubjectVoting,
  Title,
  Voting,
  MyAmountInfo,
} from "../styled/page.styled"

const Subject = () => {
  return (
    <>
      <SubjectWrapper>
        <SubjectVoting>
          <Title>GXA Token level (B) maintain</Title>
          <Voting>Voting deadline | 2023-07-01 ~ 2023-07-02</Voting>
        </SubjectVoting>
        <MyAmountBox>
          <MyAmountInfo>My vKSP</MyAmountInfo>
          <MyAmount>0 vKSP</MyAmount>
        </MyAmountBox>
      </SubjectWrapper>
    </>
  )
}

export default Subject
