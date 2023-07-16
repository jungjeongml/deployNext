"use client"
import { ethers } from "ethers"
import Web3Modal from "web3modal"
import { useState } from "react"

interface buttonProps {
  width: string
  height: string
  color: string
  padding: string
  background: string
  border: string
  borderRadius: string
  fontSize: string
  fontFamily: string
  fontWeight: string
  cursor: string
  letterSpacing: string
  children: string
  onClick: () => void
  web3Provider: string
}

const ConnectButton = ({
  width,
  height,
  color,
  padding,
  background,
  border,
  borderRadius,
  fontSize,
  fontFamily,
  fontWeight,
  cursor,
  letterSpacing,
  children,
  onClick,
  web3Provider,
}: buttonProps) => {
  return (
    <>
      {web3Provider === "" ? (
        <>
          <button
            onClick={onClick}
            style={{
              width,
              height,
              color,
              padding,
              background,
              border,
              borderRadius,
              fontSize,
              fontFamily,
              fontWeight,
              cursor,
              letterSpacing,
            }}
          >
            {children}
          </button>
        </>
      ) : (
        <div>
          <p style={{ color: "blue" }}>address: {web3Provider}</p>
        </div>
      )}
    </>
  )
}

export default ConnectButton
