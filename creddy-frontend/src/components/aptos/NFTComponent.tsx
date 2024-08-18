"use client";
import React, { useState, useEffect } from "react";

import { useKeylessAccount } from "@/context/KeylessAccountContext";

interface CredentialNFT {
	id: number;
	title: string;
	issuer: string;
	image: string;
	date: string;
}
const NFTComponent: React.FC = () => {
	const [credentials, setCredentials] = useState<CredentialNFT[]>([]);
	const { keylessAccount } = useKeylessAccount();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// Load existing credentials from localStorage
		const savedCredentials = localStorage.getItem("credentialNFTs");
		if (savedCredentials) {
			setCredentials(JSON.parse(savedCredentials));
		}
	}, []);
	const handleMintNFT = async () => {
		setIsLoading(true);
		// Simulate minting delay
		setTimeout(() => {
			const newCredential: CredentialNFT = {
				id: credentials.length + 1,
				title: `Credential ${credentials.length + 1}`,
				issuer: "Creddy",
				image: `https://picsum.photos/200/300?random=${credentials.length + 1}`,
				date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short" }),
			};
			const updatedCredentials = [newCredential, ...credentials];
			setCredentials(updatedCredentials);
			// Save to localStorage
			localStorage.setItem("credentialNFTs", JSON.stringify(updatedCredentials));
			setIsLoading(false);
		}, 2000);
	};
	return (
		<div>
			<button
				onClick={handleMintNFT}
				className='bg-purple-600 text-white px-4 py-2 rounded-md mb-4'
				disabled={isLoading}
			>
				{isLoading ? "Minting..." : "Mint New Credential"}
			</button>
			{isLoading && <p>Loading...</p>}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{credentials.map((credential) => (
					<div key={credential.id} className='border rounded-lg p-4'>
						<h3 className='text-xl font-semibold'>{credential.title}</h3>
						<p>Issued by: {credential.issuer}</p>
						<img
							src={credential.image}
							alt={credential.title}
							className='w-full h-48 object-cover mt-2'
						/>
						<p className='mt-2'>Issued on: {credential.date}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default NFTComponent;
