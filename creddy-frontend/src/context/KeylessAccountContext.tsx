"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Account, AccountAddress } from "@aptos-labs/ts-sdk";

interface SerializedKeylessAccount {
	accountAddress: string;
	publicKey: string;
}
interface KeylessAccountContextType {
	keylessAccount: Account | null;
	setKeylessAccount: (account: Account | null) => void;
}

const KeylessAccountContext = createContext<KeylessAccountContextType | undefined>(undefined);

export const KeylessAccountProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [keylessAccount, setKeylessAccountState] = useState<Account | null>(() => {
		if (typeof window !== "undefined") {
			const savedAccount = localStorage.getItem("keylessAccount");
			if (savedAccount && savedAccount !== "undefined") {
				try {
					const parsedAccount = JSON.parse(savedAccount) as SerializedKeylessAccount;
					// Return the parsed account data without casting to Account
					return {
						accountAddress: AccountAddress.fromString(parsedAccount.accountAddress),
						publicKey: parsedAccount.publicKey,
					} as unknown as Account; // Use 'unknown' as an intermediate step
				} catch (error) {
					console.error("Error parsing keylessAccount from localStorage:", error);
					return null;
				}
			}
		}
		return null;
	});

	const setKeylessAccount = (account: Account | null) => {
		setKeylessAccountState(account);
		if (account) {
			const serializedAccount: SerializedKeylessAccount = {
				accountAddress: account.accountAddress.toString(),
				publicKey: account.publicKey.toString(),
				// Serialize other fields as necessary
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
