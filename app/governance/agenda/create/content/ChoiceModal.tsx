"use client"

import { IconWrapper, LevelWrapper, ModalWrapper } from "../styled/page.styled"
import { ReactNode, useCallback, useEffect, useRef } from "react"
import ItemWrapper from "./ItemWrapper"

const ChoiceModal = ({
  open,
  setOpen,
  setText,
  onClick,
}: {
  open: boolean
  onClick: () => void
  setText: (value: any) => void
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handler = useCallback(
    (e: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        console.log("ddd")
        onClick()
      }
    },
    [wrapperRef.current]
  )

  useEffect(() => {
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <>
      <ModalWrapper ref={wrapperRef}>
        <ItemWrapper
          text={"Token level change"}
          setOpen={setOpen}
          setText={setText}
          level={["c", "b"]}
        />
        <ItemWrapper
          text={"Token level change"}
          setOpen={setOpen}
          setText={setText}
          level={["b", "c"]}
        />
        <ItemWrapper
          text={"Proposal Create"}
          setOpen={setOpen}
          setText={setText}
          level={[""]}
        />
      </ModalWrapper>
    </>
  )
}

export default ChoiceModal
