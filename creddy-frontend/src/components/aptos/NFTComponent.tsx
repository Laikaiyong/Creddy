import React, { useState, useEffect } from 'react';
import { AptosAccount } from "aptos";
import { mintNFT, getNFTInfo } from './NFTInteraction';

const NFTComponent: React.FC = () => {
    const [nfts, setNfts] = useState([]);
    const [account, setAccount] = useState<AptosAccount | null>(null);

    useEffect(() => {
        // Initialize account (you'd typically get this from a wallet connection)
        const newAccount = new AptosAccount();
        setAccount(newAccount);

        // Fetch NFTs
        const fetchNFTs = async () => {
            if (account) {
                // const nftList = await listAllNFTs(account.address().hex());
                // const nftInfoPromises = nftList.map(nftId => getNFTInfo(nftId));
                // const nftInfos = await Promise.all(nftInfoPromises);
                // setNfts(nftInfos);
            }
        };

        fetchNFTs();
    }, [account]);

    const handleMintNFT = async () => {
        if (account) {
            try {
                const txHash = await mintNFT(
                    account,
                    "My NFT",
                    "A description of my NFT",
                    "https://example.com/image.png",
                    [
                        { trait_type: "Color", value: "Blue" },
                        { trait_type: "Size", value: "Large" }
                    ]
                );
                console.log("NFT minted, transaction hash:", txHash);
                // Refresh NFT list
                // const nftList = await listAllNFTs(account.address().hex());
                // const nftInfoPromises = nftList.map(nftId => getNFTInfo(nftId));
                // const nftInfos = await Promise.all(nftInfoPromises);
                // setNfts(nftInfos);
            } catch (error) {
                console.error("Error minting NFT:", error);
            }
        }
    };

    return (
        <div>
            <h1>My NFTs</h1>
            <button onClick={handleMintNFT}>Mint New NFT</button>
            <ul>
                {nfts.map((nft, index) => (
                    <li key={index}>
                        <h3>{nft.name}</h3>
                        <p>{nft.description}</p>
                        <img src={nft.image_url} alt={nft.name} style={{maxWidth: '200px'}} />
                        <h4>Traits:</h4>
                        <ul>
                            {nft.traits.map((trait, traitIndex) => (
                                <li key={traitIndex}>{trait.trait_type}: {trait.value}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NFTComponent;