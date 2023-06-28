"use client"

import ConnectButton from "@/app/components/button/connectButton"
import styles from "./navbar.module.css"
import Link from "next/link"
import { Rubik_Gemstones } from "next/font/google"
import { useEffect, useRef, useState } from "react"
import NavModal from "@/app/components/modal/navModal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCookie } from "@fortawesome/free-solid-svg-icons"
import Web3Modal from "web3modal"
import { ethers } from "ethers"
import { getTrustWalletInjectedProvider } from "@/app/hooks/trust"
import { connectMetamask } from "@/app/hooks/metamask"
import detectEthereumProvider from "@metamask/detect-provider"
import ConnectWalletModal from "@/app/components/modal/connectWalletModal"

const rubikGemstones = Rubik_Gemstones({
  weight: "400",
  subsets: ["latin"],
})

const Navbar = () => {
  const [poolModal, setPoolModal] = useState(false)
  const [govModal, setGovModal] = useState(false)
  const [hasProvider, setHasProvider] = useState<boolean | null>(null)

  const [connectModal, setConnectModal] = useState(false)

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

  const selectWallet = () => {
    setConnectModal(true)
  }

  const connect = async () => {
    const injectedProvider = await getTrustWalletInjectedProvider()
    console.log("injectedProvider:", injectedProvider.request)
    try {
      const account = await injectedProvider.request({
        method: "eth_requestAccounts",
      })
      console.log(account)
    } catch (e: any) {
      console.log(e.message)
      if (e.code === 4001) {
        console.error("User denied connection.")
      }
    }
  }

  return (
    <div>
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
          onClick={selectWallet}
          web3Provider={""}
        >
          Connect Wallet
        </ConnectButton>
      </div>
      {connectModal && <ConnectWalletModal setConnectModal={setConnectModal} />}
    </div>
  )
}

export default Navbar
