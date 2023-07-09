import { BodyWrapper, BodyContent } from "../styled/page.styled"
import Airdrop from "./airdrop"

const data = [
  {
    index: 1,
    backgroundImg:
      "https://ss.klayswap.com/data/drops/token/0xea4c0ce0a20529127979Eb8F3FFBC7909AF09C99.png",
    title: "oPBOS AIR DROP",
    progress: "END",
  },
  {
    index: 2,
    backgroundImg:
      "https://ss.klayswap.com/data/drops/token/0xea4c0ce0a20529127979Eb8F3FFBC7909AF09C99.png",
    title: "oADRB AIR DROP",
    progress: "ING",
  },
  {
    index: 3,
    backgroundImg:
      "https://ss.klayswap.com/data/drops/token/0xea4c0ce0a20529127979Eb8F3FFBC7909AF09C99.png",
    title: "oABCD AIR DROP",
    progress: "ING",
  },
]

const DropBody = () => {
  return (
    <BodyWrapper>
      <BodyContent>
        {data.map((item, i) => (
          <Airdrop data={item} key={i} />
        ))}
      </BodyContent>
    </BodyWrapper>
  )
}

export default DropBody
