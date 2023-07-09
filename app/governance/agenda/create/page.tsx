import ChoiceBox from "./content/ChoiceBox"
import HaveBox from "./content/HaveBox"
import SubmitButton from "./content/SubmitButton"
import TokenAddressBox from "./content/TokenAddressBox"
import Write from "./content/Write"
import { ChangeCodeBox, Container, Title, Wrapper } from "./styled/page.styled"

const CreateProposal = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Suggesting Vote</Title>
        <HaveBox></HaveBox>
        <ChoiceBox></ChoiceBox>
        <TokenAddressBox></TokenAddressBox>
        <ChangeCodeBox>
          <div>Change Code</div>
        </ChangeCodeBox>
        <Write />
        <SubmitButton />
      </Wrapper>
    </Container>
  )
}

export default CreateProposal
