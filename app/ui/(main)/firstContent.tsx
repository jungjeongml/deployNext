"use client"

import RouterButton from "@/app/components/button/routerButton"
import styles from "./firstContent.module.css"
import { useRouter } from "next/navigation"

const FirstContent = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <div className={styles.accountContent}>
        <div className={styles.isLogin}>
          <div className={styles.accounts}>
            <h1>logo</h1>
            <span>Connected with ...</span>
          </div>
          <div className={styles.balance}>
            <div className={styles.collect}>
              <h2>$0</h2>
              <span>to collect</span>
            </div>
            <RouterButton
              width=""
              height="48px"
              color="#1FC7D4"
              padding="0px 24px"
              background="#fff"
              border="2px solid"
              borderRadius="16px"
              fontSize="16px"
              fontFamily=""
              fontWeight="600"
              cursor="pointer"
              letterSpacing="0.03rem"
              onClick={() => router.push("/swap")}
            >
              Start earning
            </RouterButton>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <h2 className={styles.subject}>The moon is made of cookies.</h2>
          <h2 className={styles.content}>
            Trade, earn, and win crypto on the most popular decentralized
            platform in the galaxy.
          </h2>
          <div className={styles.buttonWrap}>
            <RouterButton
              width=""
              height="48px"
              color="#fff"
              padding="0px 24px"
              background="#1FC7D4"
              border="none"
              borderRadius="16px"
              fontSize="16px"
              fontFamily=""
              fontWeight="600"
              cursor="pointer"
              letterSpacing="0.03rem"
              onClick={() => {}}
            >
              Connect Wallet
            </RouterButton>
            <RouterButton
              width=""
              height="48px"
              color="#1FC7D4"
              padding="0px 24px"
              background="#fff"
              border="none"
              borderRadius="16px"
              fontSize="16px"
              fontFamily=""
              fontWeight="600"
              cursor="pointer"
              letterSpacing="0.03rem"
              onClick={() => {
                router.push("/swap")
              }}
            >
              Trade Now
            </RouterButton>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src="https://assets.pancakeswap.finance/web/images/astronaut-bunny.png"
            className={styles.img}
          />
        </div>
      </div>
    </div>
  )
}

export default FirstContent
