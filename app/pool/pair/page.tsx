"use client"
import PoolIntro from "@/app/components/pool/intro/poolIntro"
import styles from "./page.module.css"
import { PairList } from '@/app/components/pool/pairlist/pair'
import { SwapBox } from '@/app/components/swapbox'


const PairPool = () => {
  return (
    <div className={styles.container}>
      <PoolIntro />
      <PairList text='ARB' text2='ASD' top={5.5} radius1={2} radius2={2}></PairList>
      <PairList text='USDT' text2='ASD'></PairList>
      <PairList text='ETH' text2='ASD' radius3={2} radius4={2}></PairList>
    </div>
  )
}

export default PairPool
