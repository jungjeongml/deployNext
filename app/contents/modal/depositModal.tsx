"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from '../../components/button/button';
import { SwapBox } from '../../components/swapbox';
import { ModalWrapST } from '../../components/modal2/styled';
import { CustomModal } from '../../components/modal2/styled';
import { ModalcontentST } from '../../components/modal2/styled';
import { Span } from '@/app/components/span/span';
import { ISwap } from '@/app/components/component.inteface';

const DepositModalContent = ({token, balance}:ISwap) =>{
  return (
    <>
      <ModalWrapST width={280} height={250}>
        <ModalcontentST width={280} height={100} flex={"true"}>
          <Span size={2.2} weight={"true"} text={"Add Liquidity"}></Span>
          <Span size={1.3} weight={"none"} text={"deposit Amount"} left={0} color={"purple"}></Span>
        </ModalcontentST>
        <ModalcontentST width={280} height={150}>
          <SwapBox token={token} balance={balance} ></SwapBox>
          <Button width={18} height={2} top={1} text={"Deposit"}></Button>    
        </ModalcontentST>
      </ModalWrapST>
    </>
  )
}

export const DepositModal = (props:any) => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Button width={6.303} height={2} onclick={() => setModalIsOpen(true)} text={"Deposit"}></Button>
      <CustomModal isOpen={modalIsOpen} onClose={()=>setModalIsOpen(false)} width={340} height={350} left={17} content={<DepositModalContent token={'ARB'} balance={0}/>}/>
    </>
  );
};