"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from '../../components/button/button';
import { SwapBox } from '../../components/swapbox';
import { ModalWrapST } from '../../components/modal2/styled';
import { CustomModal } from '../../components/modal2/styled';
import { ModalcontentST } from '../../components/modal2/styled';
import { Span } from '@/app/components/span/span';
import { IPairSwap, ISwap, Token, TokenBalance } from '@/app/components/component.inteface';

const DepositPairModalContent = ({token1, balance1,token2, balance2}:IPairSwap) =>{
  return (
    <>
      <ModalWrapST width={280} height={250}>
        <ModalcontentST width={280} height={100} flex={"true"}>
          <Span size={2.2} weight={"true"} text={"Add Liquidity"}></Span>
          <Span size={1.3} weight={"none"} text={"deposit Amount"} left={0} color={"purple"}></Span>
        </ModalcontentST>
        <ModalcontentST width={280} height={150}>
          <SwapBox token={token1 as Token} balance={balance1 as TokenBalance} ></SwapBox>
          <SwapBox token={token2 as Token} balance={balance2 as TokenBalance} top={1.2} ></SwapBox>
          <Button width={18} height={2} top={2} text={"Deposit"}></Button>    
        </ModalcontentST>
      </ModalWrapST>
    </>
  )
}

export const DepositPairModal = (props:any) => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Button width={6.303} height={2} onclick={() => setModalIsOpen(true)} text={"Deposit"}></Button>
      <CustomModal isOpen={modalIsOpen} onClose={()=>setModalIsOpen(false)} width={340} height={500} left={17} content={<DepositPairModalContent token1={'ARB'} balance1={0} token2={'ASD'} balance2={0}/>}/>
    </>
  );
};