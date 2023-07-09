"use client"
import { useRouter } from "next/navigation"
import RouterButton from "../button/routerButton"
import styles from "./isLogin.module.css"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

const IsLogin = () => {
  const router = useRouter()
  const account = useSelector((state: RootState) => state.account)
  console.log("account:", account[0])
  const shortAccount = `${account[0].slice(0, 6)}...${account[0].slice(-4)}`

  return (
    <div className={styles.accountContent}>
      <div className={styles.isLogin}>
        <div className={styles.accounts}>
          <h1>logo</h1>
          <span>Connected with {shortAccount}</span>
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
  )
}

export default IsLogin
