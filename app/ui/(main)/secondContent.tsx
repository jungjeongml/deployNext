import ConnectButton from "@/app/components/button/routerButton"
import styles from "./secondContent.module.css"

const SecondContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.subject}>
          Join AirDrop and enjoy greater benefits
        </h2>
        <ConnectButton
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
        >
          Join Drops
        </ConnectButton>
      </div>
    </div>
  )
}

export default SecondContent
