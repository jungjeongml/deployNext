"use client"

export const connect = async () => {
  const injectedProvider = await getTrustWalletInjectedProvider()
  console.log("injectedProvider:", injectedProvider.request)
  try {
    console.log('11')
    const account = await injectedProvider.request({
      method: "eth_requestAccounts",
    })
    console.log(account)
    return account
  } catch (e) {
    console.log(e.message)
    if (e.code === 4001) {
      console.error("User denied connection.")
    }
  }
}

export async function getTrustWalletInjectedProvider(
  { timeout } = { timeout: 3000 }
) {
  
  const provider = getTrustWalletFromWindow();
  console.log("provider:", provider)

  if (provider) {
    console.log("provider:", provider)
    return provider;
  }

  return listenForTrustWalletInitialized({ timeout });
}

async function listenForTrustWalletInitialized(
  { timeout } = { timeout: 3000 }
) {
  return new Promise((resolve) => {
    const handleInitialization = () => {
      resolve(getTrustWalletFromWindow());
    };

    window.addEventListener("trustwallet#initialized", handleInitialization, {
      once: true,
    });

    setTimeout(() => {
      window.removeEventListener(
        "trustwallet#initialized",
        handleInitialization,
        { once: true }
      );
      resolve(null);
    }, timeout);
  });
}

export function getTrustWalletFromWindow() {
  const isTrustWallet = (ethereum) => {
    console.log("window.ethereum:", window.ethereum)
    const trustWallet = !!ethereum.isTrust;
    console.log('trustwallet:', trustWallet)
    return trustWallet;
  };

  const injectedProviderExist =
    typeof window !== "undefined" && typeof window.ethereum !== "undefined";

  if (!injectedProviderExist) {
    return null;
  }

  if (isTrustWallet(window.ethereum)) {
    console.log("window.ethereum:", window.ethereum)
    return window.ethereum;
  }

  console.log('window.ethereum.provider:', window.ethereum?.provider)
  if (window.ethereum?.providers) {
    return window.ethereum.providers.find(isTrustWallet) ?? null;
  }

  console.log("window[trustwallet]:", window["trustwallet"])
  return window["trustwallet"] ?? null;
}