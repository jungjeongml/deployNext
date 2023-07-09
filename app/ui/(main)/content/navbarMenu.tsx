import Link from "next/link"
import { Item, Menu, Wrapper } from "../styled/navbar.styled"

const NavbarMenu = () => {
  return (
    <Menu>
      <Link href={"/swap"}>
        <Wrapper>
          <Item>
            <span>Swap</span>
          </Item>
        </Wrapper>
      </Link>
      <Wrapper>
        <Item>
          Pool
          {/* {poolModal && (
              <NavModal
                list={["single", "pair"]}
                link={[`/pool/single`, `/pool/pair`]}
                close={() => setPoolModal(false)}
              />
            )} */}
        </Item>
      </Wrapper>
      <Wrapper>
        <Item>
          Governance
          {/* {govModal && (
              <NavModal
                list={[`staking + full vote`, `agenda vote`]}
                link={[`/governance/staking`, `/governance/agenda`]}
                close={() => setGovModal(false)}
              />
            )} */}
        </Item>
      </Wrapper>
      <Link href={"/drops"}>
      <Wrapper>
        <Item>Drops</Item>
      </Wrapper>
      </Link>
      <Link href={"/dashboard"}>
        <Wrapper>
          <Item>Dashboard</Item>
        </Wrapper>
      </Link>
    </Menu>
  )
}

export default NavbarMenu
