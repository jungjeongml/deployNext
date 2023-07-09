"use client"

import { useEffect, useState } from "react"
import { Choice, ChoiceText, ChoiceWrap } from "../styled/page.styled"
import ChoiceModal from "./ChoiceModal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons"
import ItemWrapper from "./ItemWrapper"

const ChoiceBox = () => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("Proposal Type")

  useEffect(() => {
    console.log("11", open)
  }, [open])

  return (
    <>
      <ChoiceWrap>
        <Choice onClick={() => setOpen(true)}>
          <ChoiceText>
            <strong>{text}</strong>
          </ChoiceText>
          <FontAwesomeIcon icon={faArrowAltCircleDown} color="#bbb" />
          {open && (
            <ChoiceModal
              onClick={() => setOpen(false)}
              open={open}
              setOpen={setOpen}
              setText={setText}
            ></ChoiceModal>
          )}
        </Choice>
      </ChoiceWrap>
    </>
  )
}

export default ChoiceBox
