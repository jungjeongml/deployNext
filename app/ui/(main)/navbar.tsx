"use client"

import styles from "./navbar.module.css"
import Link from "next/link"
import { Rubik_Gemstones } from "next/font/google"
import { useEffect, useState } from "react"
import NavModal from "@/app/components/modal/navModal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCookie } from "@fortawesome/free-solid-svg-icons"
import { getTrustWalletInjectedProvider } from "@/app/utiles/trust"
import ConnectWalletModal from "@/app/components/modal/connectWalletModal"
import { Button } from "@/app/components/button/button"
import { Custom2 } from "@/app/components/modal2/styled/custom2"
import { ConnectWallet } from "../../contents/connectwalllet/connetwallet"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { ethers } from "ethers"
import { setProvider } from "@/redux/slice/providerSlice"

interface WalletState {
  wallet: string
  signer: string
}

const rubikGemstones = Rubik_Gemstones({
  weight: "400",
  subsets: ["latin"],
})

const Navbar = () => {
  const dispatch = useDispatch()
  const wallet = useSelector<RootState, WalletState>((state) => state.wallet)
  const [modalIsOpen, setModalIsOpen] = useState(false)
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

  const setProviderState = async (wallet: WalletState) => {
    let provider
    switch (wallet.wallet) {
      case "MetaMask":
        provider = new ethers.providers.Web3Provider(window.ethereum)
        dispatch(setProvider(provider))
        break
      case "Trust":
        const injectedProvider = await getTrustWalletInjectedProvider()
        provider = new ethers.providers.Web3Provider(injectedProvider)
        dispatch(setProvider(provider))
        break
      case "WalletConnect":
        break
      case "none":
        dispatch(setProvider("none"))
        break
    }
  }
  useEffect(() => {
    setProviderState(wallet)
  }, [])

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
          <Link href={"/swap"}>
            <div className={styles.wrapper}>
              <div className={styles.item}>
                <span>Swap</span>
              </div>
            </div>
          </Link>
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
          <Link href={"/drops"}>
            <div className={styles.wrapper}>
              <div className={styles.item}>Drops</div>
            </div>
          </Link>
          <Link href={"/dashboard"}>
            <div className={styles.wrapper}>
              <div className={styles.item}>Dashboard</div>
            </div>
          </Link>
        </div>
        <div>togglebutton</div>
        <Button
          width={12}
          height={2}
          onclick={() => setModalIsOpen(true)}
          text={"Connect Wallet"}
        ></Button>
        <Custom2
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          width={793}
          height={491}
          content={<ConnectWallet />}
        />
      </div>
      {connectModal && <ConnectWalletModal setConnectModal={setConnectModal} />}
    </div>
  )
}

export default Navbar
