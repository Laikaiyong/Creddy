"use client";

import GoogleLogo from "./GoogleLogo";
import useEphemeralKeyPair from "../../hooks/useEphemeralKeyPair";
import { useKeylessAccount } from "../../context/KeylessAccountContext";
import { collapseAddress } from "../../utils/address";
import { toast } from "sonner";
import { useEffect, useState } from "react";

const buttonStyles =
	"nes-btn flex items-center justify-center md:gap-4 py-2 drop-shadow-md bg-white rounded-3xl px-5 flex-nowrap whitespace-nowrap text-black";

export default function WalletButtons() {
	if (!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID) {
		throw new Error("Google Client ID is not set in env");
	}

	const { keylessAccount, setKeylessAccount } = useKeylessAccount();
	const ephemeralKeyPair = useEphemeralKeyPair();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// This effect will run after the initial render
		setIsLoading(false);
	}, []);

	const redirectUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
	const searchParams = new URLSearchParams({
		/**
		 * Replace with your own client ID
		 */
		client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
		/**
		 * The redirect_uri must be registered in the Google Developer Console. This callback page
		 * parses the id_token from the URL fragment and combines it with the ephemeral key pair to
		 * derive the keyless account.
		 */
		redirect_uri: `${
			typeof window !== "undefined" && window.location.origin ? window.location.origin : ""
		}/auth`,
		/**
		 * This uses the OpenID Connect implicit flow to return an id_token. This is recommended
		 * for SPAs (single-page applications) as it does not require a backend server.
		 */
		response_type: "id_token",
		scope: "openid email profile",
		nonce: ephemeralKeyPair.nonce,
	});
	redirectUrl.search = searchParams.toString();

	const disconnect = () => {
		setKeylessAccount(null);
		localStorage.removeItem("keylessAccount");
		toast.success("Successfully disconnected account");
	};
	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (keylessAccount) {
		const address = keylessAccount.accountAddress?.toString() ?? "";

		return (
			<div className='flex items-center justify-center m-auto sm:m-0 sm:px-4'>
				<button className={buttonStyles} onClick={disconnect} title='Disconnect Wallet'>
					<GoogleLogo />
					<span title={address}>{collapseAddress(address)}</span>
				</button>
			</div>
		);
	}

	return (
		<div className='flex items-center justify-center m-auto sm:m-0 sm:px-4'>
			<a href={redirectUrl.toString()} className='hover:no-underline'>
				<button className={buttonStyles}>
					<GoogleLogo />
					<p>Sign in</p>
				</button>
			</a>
		</div>
	);
}
