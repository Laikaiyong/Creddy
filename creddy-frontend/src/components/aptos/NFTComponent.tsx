import React, { useState, useEffect } from "react";
import { mintSBT, getNFTInfo, createCollection } from "./NFTInteraction";
import { useKeylessAccount } from "@/context/KeylessAccountContext";

interface NFTInfo {
	name: string;
	description: string;
	imageUrl: string;
	traits: { traitType: string; value: string }[];
	creationTimestamp: number;
}

const NFTComponent: React.FC = () => {
	const [nfts, setNfts] = useState<NFTInfo[]>([]);
	const { keylessAccount } = useKeylessAccount();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetchNFTs();
	}, [keylessAccount]);

	const fetchNFTs = async () => {
		if (keylessAccount) {
			setIsLoading(true);
			try {
				// Assuming getNFTInfo can retrieve all NFTs for an account
				const nftInfos = await getNFTInfo(keylessAccount.accountAddress.toString());
				setNfts(Array.isArray(nftInfos) ? nftInfos : [nftInfos]);
			} catch (error) {
				console.error("Error fetching NFTs:", error);
			} finally {
				setIsLoading(false);
			}
		}
	};
	const handleMintNFT = async () => {
		if (keylessAccount) {
			setIsLoading(true);
			try {
				const txHash = await mintSBT(
					keylessAccount,
					"My NFT",
					"A description of my NFT",
					"https://cryptologos.cc/logos/aptos-apt-logo.png",
					["Color", "Size"],
					["Blue", "Large"]
				);
				console.log("NFT minted, transaction hash:", txHash);
				await fetchNFTs(); // Refresh NFT list after minting
			} finally {
				setIsLoading(false);
			}
		}
	};

	return (
		<div>
			<h2 className='text-2xl font-bold mb-4'>My NFTs</h2>
			<button
				onClick={handleMintNFT}
				className='bg-purple-600 text-white px-4 py-2 rounded-md mb-4'
				disabled={isLoading}
			>
				{isLoading ? "Minting..." : "Mint New NFT"}
			</button>
			{isLoading && <p>Loading...</p>}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{nfts.map((nft, index) => (
					<div key={index} className='border rounded-lg p-4'>
						<h3 className='text-xl font-semibold'>{nft.name}</h3>
						<p>{nft.description}</p>
						<img src={nft.imageUrl} alt={nft.name} className='w-full h-48 object-cover mt-2' />
						<h4 className='mt-2 font-medium'>Traits:</h4>
						<ul>
							{nft.traits.map((trait, traitIndex) => (
								<li key={traitIndex}>
									{trait.traitType}: {trait.value}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default NFTComponent;
