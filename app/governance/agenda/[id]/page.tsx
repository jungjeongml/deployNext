import GovInfo from "./content/govInfo"
import GovProgress from "./content/govProgress"
import Subject from "./content/subject"
import TextContent from "./content/textContent"
import YesOrNoBox from "./content/yesOrNoBox"
import { BodyWrapper, Container } from "./styled/page.styled"

type PageParams = {
  id: string
}

const ViewProposal = ({ params }: { params: PageParams }) => {
  console.log({ params })

  return (
    <Container>
      <BodyWrapper>
        <Subject></Subject>
        <YesOrNoBox></YesOrNoBox>
        <TextContent />
        <GovInfo />
        <GovProgress />
      </BodyWrapper>
    </Container>
  )
}

export default ViewProposal
