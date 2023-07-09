"use client"

import { useState } from "react"
import {
  DropIcon,
  DropInfoButton,
  DropItem,
  DropItemWrapper,
  DropLabel,
  DropTitle,
  DropTitleWrapper,
} from "../styled/page.styled"
import PlusIcon from "./plusIcon"
import AirdropModal from "@/app/components/modal/airdropModal"

interface props {
  index: number
  backgroundImg: string
  title: string
  progress: string
}

const Airdrop = ({ data }: { data: props }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleModal = () => {
    setIsOpen(true)
  }

  return (
    <DropItemWrapper>
      {isOpen && <AirdropModal index={data.index} setIsOpen={setIsOpen} />}
      <DropItem>
        <DropTitleWrapper>
          <DropIcon>
            <img
              src={data.backgroundImg}
              width={"48px"}
              height={"48px"}
              style={{ borderRadius: "50%" }}
            />
          </DropIcon>
          <DropTitle>{data.title}</DropTitle>
          <DropLabel>{data.progress}</DropLabel>
        </DropTitleWrapper>
        <DropInfoButton onClick={handleModal}>
          <PlusIcon />
        </DropInfoButton>
      </DropItem>
    </DropItemWrapper>
  )
}

export default Airdrop
