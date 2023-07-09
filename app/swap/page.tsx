"use client"

import { useEffect, useState } from "react"
import styles from "./page.module.css"
import { SwapToken } from "../contents/swaptoken/swaptoken"
import { IsetToken } from "../components/component.inteface"
import { SettingBtn } from "../components/buttons/settingbtn"
import { Button } from "../components/button/button"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { useFactory } from "../hooks/usefactory"

const Swap = () => {
  const { provider, wallet } = useSelector<RootState, RootState>(
    (state) => state
  )
  useEffect(() => {
    if (provider.provider !== "none") {
      const contract = useFactory(provider.provider)
      console.log(contract)
    }
  }, [provider])

  const [tokenSwap, setTokenSwap] = useState<IsetToken>({
    from: "ARB",
    frombalance: 10,
    to: "ETH",
    tobalance: 10,
  })

  const swapClickHandler = () => {
    const swapData = {
      from: tokenSwap.to,
      frombalance: tokenSwap.tobalance,
      to: tokenSwap.from,
      tobalance: tokenSwap.frombalance,
    }
    setTokenSwap(swapData)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.swapWrapper}>
          <div className={styles.header}>
            <div className={styles.info}>
              <h3>Swap</h3>
              <span>Trade tokens in an instant</span>
            </div>
            <div className={styles.options}>
              <SettingBtn></SettingBtn>
            </div>
          </div>
          <div className={styles.content}>
            <SwapToken
              swapData={tokenSwap}
              onClick={swapClickHandler}
            ></SwapToken>
            <Button width={18} height={3} text={"Swap"}></Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Swap
