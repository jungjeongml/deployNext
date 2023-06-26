"use client"

import ConnectButton from "@/app/components/button/connectButton"
import styles from "./navbar.module.css"
import Link from "next/link"
import { Rubik_Gemstones } from "next/font/google"
import { useState } from "react"
import NavModal from "@/app/components/modal/navModal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCookie } from "@fortawesome/free-solid-svg-icons"
import Web3Modal from "web3modal"
import { ethers } from "ethers"

const rubikGemstones = Rubik_Gemstones({
  weight: "400",
  subsets: ["latin"],
})

const Navbar = () => {
  const [poolModal, setPoolModal] = useState(false)
  const [govModal, setGovModal] = useState(false)
  const [web3Provider, setWeb3Provider] = useState("")

  const poolMouseEnter = () => {
    setPoolModal(true)
  }

  const poolMouseLeave = () => {
    setPoolModal(false)
  }

  const govMouseEnter = () => {
    setGovModal(true)
  }

  const govMouseLeave = () => {
    setGovModal(false)
  }

  const connect = async () => {
    try {
      console.log("bdd")
      console.log(window.ethereum)
      if (window.ethereum == null) {
        alert("지갑을 설치해주세요")
        return
      }

      let web3modal = new Web3Modal({
        cacheProvider: true,
        providerOptions: {},
      })

      const web3ModalInstance = await web3modal.connect()

      const web3ModalProvider = new ethers.BrowserProvider(web3ModalInstance)

      const signer = await web3ModalProvider.getSigner()

      console.log(signer.address)
      if (web3ModalProvider) {
        setWeb3Provider(signer.address)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className={styles.container}>
      <Link href={"/"}>
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faCookie} color="#8B5927" />
          <h3 className={rubikGemstones.className}>cookieSwap</h3>
        </div>
      </Link>
      <div className={styles.menu}>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <Link href={"/swap"}>
              <span>Swap</span>
            </Link>
          </div>
        </div>
        <div
          className={styles.wrapper}
          onMouseEnter={poolMouseEnter}
          onMouseLeave={poolMouseLeave}
        >
          <div className={styles.item}>
            Pool
            {poolModal && (
              <NavModal
                list={["single", "pair"]}
                link={[`/pool/single`, `/pool/pair`]}
                close={() => setPoolModal(false)}
              />
            )}
          </div>
        </div>
        <div
          className={styles.wrapper}
          onMouseEnter={govMouseEnter}
          onMouseLeave={govMouseLeave}
        >
          <div className={styles.item}>
            Governance
            {govModal && (
              <NavModal
                list={[`staking + full vote`, `agenda vote`]}
                link={[`/governance/staking`, `/governance/agenda`]}
                close={() => setGovModal(false)}
              />
            )}
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.item}>Drops</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.item}>Dashboard</div>
        </div>
      </div>
      <div>togglebutton</div>
      <ConnectButton
        width=""
        height="32px"
        color="#fff"
        padding="0px 16px"
        background="#1FC7D4"
        border="none"
        borderRadius="16px"
        fontSize="16px"
        fontFamily=""
        fontWeight="600"
        cursor="pointer"
        letterSpacing="0.03rem"
        onClick={connect}
        web3Provider={web3Provider}
      >
        Connect Wallet
      </ConnectButton>
    </div>
  )
}

export default Navbar
