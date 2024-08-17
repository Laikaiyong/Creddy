"use client";

import { useEffect, useRef, useState } from "react";
import { PacmanLoader } from "react-spinners";
import { jwtDecode } from "jwt-decode";
import { getLocalEphemeralKeyPair } from "@/hooks/useEphemeralKeyPair";
import { useRouter } from "next/navigation";
import { getAptosClient } from "@/utils/aptosClient";
import { EphemeralKeyPair } from "@aptos-labs/ts-sdk";
import { useKeylessAccount } from "@/context/KeylessAccountContext";
import { toast } from "sonner";

const parseJWTFromURL = (url: string): string | null => {
  const urlObject = new URL(url);
  const fragment = urlObject.hash.substring(1);
  const params = new URLSearchParams(fragment);
  return params.get("id_token");
};



export default function Page() {
//   const isLoading = useRef(false);
//   const switchKeylessAccount = useKeylessAccounts(
//     (state) => state.switchKeylessAccount
//   );


//   const fragmentParams = new URLSearchParams(window.location.hash.substring(1));
//   const idToken = fragmentParams.get("id_token");

//   useEffect(() => {
//     // This is a workaround to prevent firing twice due to strict mode
//     if (isLoading.current) return;
//     isLoading.current = true;

//     async function deriveAccount(idToken: string) {
//         console.log(idToken);
//       try {
//         await switchKeylessAccount(idToken);
//         // window.location.href = "/home";
//       } catch (error) {
//         // window.location.href = "/";
//       }
//     }

//     if (!idToken) {
//       window.location.href = "/";
//       return;
//     }

//     deriveAccount(idToken);
//   }, [idToken, isLoading, switchKeylessAccount]);

  const { setKeylessAccount } = useKeylessAccount();
  const { push } = useRouter();

  const [progress, setProgress] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {

    async function deriveAccount() {
      const jwt = parseJWTFromURL(window.location.href);

      if (!jwt) {
        setHasError(true);
        setProgress(100);
        toast.error("No JWT found in URL. Please try logging in again.");
        return;
      }

      const payload = jwtDecode<{ nonce: string }>(jwt);

      const jwtNonce = payload.nonce;

      const ephemeralKeyPair = getLocalEphemeralKeyPair(jwtNonce);

      if (!ephemeralKeyPair) {
        setHasError(true);
        setProgress(100);
        toast.error(
          "No ephemeral key pair found for the given nonce. Please try logging in again."
        );
        return;
      }

      await createKeylessAccount(jwt, ephemeralKeyPair);
    //   clearInterval(interval);
      push("/home");
    }

    deriveAccount();
  }, []);

  const createKeylessAccount = async (
    jwt: string,
    ephemeralKeyPair: EphemeralKeyPair
  ) => {
    const aptosClient = getAptosClient();
    const keylessAccount = await aptosClient.deriveKeylessAccount({
      jwt,
      ephemeralKeyPair,
    });

    const accountCoinsData = await aptosClient.getAccountCoinsData({
      accountAddress: keylessAccount?.accountAddress.toString(),
    });
    // account does not exist yet -> fund it
    if (accountCoinsData.length === 0) {
      try {
        await aptosClient.fundAccount({
          accountAddress: keylessAccount.accountAddress,
          amount:  10000000, // faucet 2 APT to create the account
        });
      } catch (error) {
        console.log("Error funding account: ", error);
        toast.error(
          "Failed to fund account. Please try logging in again or use another account."
        );
      }
    }

    console.log("Keyless Account: ", keylessAccount.accountAddress.toString());
    setKeylessAccount(keylessAccount);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <PacmanLoader color="#000" />
    </div>
  );
}
