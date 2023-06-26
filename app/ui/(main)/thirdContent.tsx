import ConnectButton from "@/app/components/button/routerButton"
import styles from "./thirdContent.module.css"

const ThirdContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2 className={styles.subject}>The moon is made of cookies.</h2>
          <p>
            Trade, earn, and win crypto on the most popular decentralized
            platform in the galaxy
          </p>
          <div className={styles.buttonWrap}>
            <ConnectButton
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
            >
              Connect Wallet
            </ConnectButton>
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
              Trade Now
            </ConnectButton>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ThirdContent
