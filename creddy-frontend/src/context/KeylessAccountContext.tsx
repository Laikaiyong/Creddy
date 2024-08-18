"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Account, AccountAddress, KeylessAccount, SigningScheme } from "@aptos-labs/ts-sdk";

interface SerializedKeylessAccount {
	accountAddress: string;
	publicKey: string;
	jwt: string;
	pepper: Uint8Array;
	signingScheme: SigningScheme;
	uidKey: string;
	uidVal: string;
	aud: string;
}
interface KeylessAccountContextType {
	keylessAccount: KeylessAccount | null;
	setKeylessAccount: (account: KeylessAccount | null) => void;
}

const KeylessAccountContext = createContext<KeylessAccountContextType | undefined>(undefined);

export const KeylessAccountProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [keylessAccount, setKeylessAccountState] = useState<KeylessAccount | null>(() => {
		if (typeof window !== "undefined") {
			const savedAccount = localStorage.getItem("keylessAccount");
			if (savedAccount && savedAccount !== "undefined") {
				try {
					const parsedAccount = JSON.parse(savedAccount) as KeylessAccount;

					// Return the parsed account data without casting to Account
					return {
						accountAddress: parsedAccount.accountAddress.toString(),
						ephemeralKeyPair: parsedAccount.ephemeralKeyPair,
						uidKey: parsedAccount.uidKey,
						uidVal: parsedAccount.uidVal,
						aud: parsedAccount.aud,
						jwt: parsedAccount.jwt,
						pepper: parsedAccount.pepper,
						publicKey: parsedAccount.publicKey,
						signingScheme: parsedAccount.signingScheme,
					} as unknown as KeylessAccount; // Use 'unknown' as an intermediate step
				} catch (error) {
					console.error("Error parsing keylessAccount from localStorage:", error);
					return null;
				}
			}
		}
		return null;
	});

	const setKeylessAccount = (account: KeylessAccount | null) => {
		setKeylessAccountState(account);
		if (account) {
			const serializedAccount: SerializedKeylessAccount = {
				accountAddress: account.accountAddress.toString(),
				publicKey: account.publicKey.toString(),
				jwt: account.jwt,
				pepper: account.pepper,
				signingScheme: account.signingScheme,
				uidKey: account.uidKey,
				uidVal: account.uidVal,
				aud: account.aud,
			};
			localStorage.setItem("keylessAccount", JSON.stringify(serializedAccount));
		} else {
			localStorage.removeItem("keylessAccount");
		}
	};

	return (
		<KeylessAccountContext.Provider value={{ keylessAccount, setKeylessAccount }}>
			{children}
		</KeylessAccountContext.Provider>
	);
};

export const useKeylessAccount = () => {
	const context = useContext(KeylessAccountContext);
	if (!context) {
		throw new Error("useKeylessAccount must be used within a KeylessAccountProvider");
	}
	return context;
};
