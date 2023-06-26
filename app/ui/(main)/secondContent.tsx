"use client"

import { useRouter } from "next/navigation"
import styles from "./secondContent.module.css"
import RouterButton from "@/app/components/button/routerButton"

const SecondContent = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.subject}>
          Join AirDrop and enjoy greater benefits
        </h2>
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
          onClick={() => router.push("/drops")}
        >
          Join Drops
        </RouterButton>
      </div>
    </div>
  )
}

export default SecondContent
