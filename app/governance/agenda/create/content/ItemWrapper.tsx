"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconWrapper, Item, LevelWrapper } from "../styled/page.styled"
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { useCallback, useEffect, useRef } from "react"

const ItemWrapper = ({
  text,
  setOpen,
  setText,
  level,
}: {
  text: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setText: (value: string) => void
  level: string[]
}) => {
  const itemRef = useRef<HTMLDivElement>(null)

  const clickHander = () => {
    if (level[0] === "") {
      setText(text)
    } else if (level[0] === "c") {
      setText("Token level change C -> B")
    } else {
      setText("Token level change B -> C")
    }
    setOpen(false)
  }

  return (
    <>
      <Item ref={itemRef} onClick={clickHander}>
        {text}
        {text === "Token level change" && (
          <>
            <IconWrapper>
              <LevelWrapper>
                <strong>{level[0]}</strong>
              </LevelWrapper>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
              <LevelWrapper>
                <strong>{level[1]}</strong>
              </LevelWrapper>
            </IconWrapper>
          </>
        )}
      </Item>
    </>
  )
}

export default ItemWrapper
