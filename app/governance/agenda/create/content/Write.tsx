import {
  ContentBox,
  ContentWrapper,
  SubjectBox,
  SubjectWrapper,
  WriteWrapper,
} from "../styled/page.styled"

const Write = () => {
  return (
    <WriteWrapper>
      <SubjectWrapper>
        <SubjectBox placeholder="Subject" type="text" />
      </SubjectWrapper>
      <ContentWrapper>
        <ContentBox
          placeholder="Put a Proposal
          "
        />
      </ContentWrapper>
    </WriteWrapper>
  )
}

export default Write
