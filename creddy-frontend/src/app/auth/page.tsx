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
	const { setKeylessAccount } = useKeylessAccount();
	const { push } = useRouter();

	const [progress, setProgress] = useState<number>(0);
	const [hasError, setHasError] = useState<boolean>(false);
	useEffect(() => {
		async function deriveAccount() {
			const jwt = parseJWTFromURL(window.location.href);
			console.log("JWT found:", jwt);

			if (!jwt) {
				setHasError(true);
				setProgress(100);
				toast.error("No JWT found in URL. Please try logging in again.");
				return;
			}

			const payload = jwtDecode<{ nonce: string }>(jwt);
			const jwtNonce = payload.nonce;
			console.log("JWT Nonce:", jwtNonce);

			const ephemeralKeyPair = getLocalEphemeralKeyPair(jwtNonce);
			console.log("Ephemeral Key Pair:", ephemeralKeyPair);

			if (!ephemeralKeyPair) {
				setHasError(true);
				setProgress(100);
				toast.error(
					"No ephemeral key pair found for the given nonce. Please try logging in again."
				);
				return;
			}

			await createKeylessAccount(jwt, ephemeralKeyPair);
			console.log("Keyless Account created and set");
			push("/home");
		}

		deriveAccount();
	}, []);
	const createKeylessAccount = async (jwt: string, ephemeralKeyPair: EphemeralKeyPair) => {
		const aptosClient = getAptosClient();
		const keylessAccount = await aptosClient.deriveKeylessAccount({
			jwt,
			ephemeralKeyPair,
		});
		console.log("Derived Keyless Account:", keylessAccount);

		const accountCoinsData = await aptosClient.getAccountCoinsData({
			accountAddress: keylessAccount?.accountAddress.toString(),
		});
		// account does not exist yet -> fund it
		if (accountCoinsData.length === 0) {
			try {
				await aptosClient.fundAccount({
					accountAddress: keylessAccount.accountAddress,
					amount: 10000000, // faucet 2 APT to create the account
				});
			} catch (error) {
				console.log("Error funding account: ", error);
				toast.error("Failed to fund account. Please try logging in again or use another account.");
			}
		}

		setKeylessAccount(keylessAccount);
	};

	return (
		<div className='flex flex-col items-center justify-center w-full h-screen'>
			<PacmanLoader color='#000' />
		</div>
	);
}
