"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";


const contractAddress = process.env.NEXT_PUBLIC_SCROLL_CONTRACT;
const contractABI = [
	"function vote(uint256 _postId, bool _isUpvote) external",
	"function getVotes(uint256 _postId) external view returns (uint256 upvotes, uint256 downvotes)",
];

const VotingSystem: React.FC = () => {
	const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
	const [contract, setContract] = useState<ethers.Contract | null>(null);
	const [readOnlyContract, setReadOnlyContract] = useState<ethers.Contract | null>(null);

	const [postId, setPostId] = useState<number>(1);
	const [upvotes, setUpvotes] = useState<number>(0);
	const [downvotes, setDownvotes] = useState<number>(0);

	useEffect(() => {
		// Initialize read-only contract
		const initReadOnlyContract = async () => {
			const readOnlyProvider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL);
			const readOnlyContractInstance = new ethers.Contract(
				contractAddress!,
				contractABI,
				readOnlyProvider
			);
			setReadOnlyContract(readOnlyContractInstance);
		};
		initReadOnlyContract();
	}, []);

	const connectWallet = async () => {
		if (typeof (window as any).ethereum !== "undefined") {
			try {
				await (window as any).ethereum.request({ method: "eth_requestAccounts" });
				const browserProvider = new ethers.BrowserProvider((window as any).ethereum);
				setProvider(browserProvider);
				const signer = await browserProvider.getSigner();
				const contractInstance = new ethers.Contract(contractAddress!, contractABI, signer);
				setContract(contractInstance);
			} catch (error) {
				console.error("Failed to connect to wallet:", error);
			}
		} else {
			console.error("Ethereum object not found, install MetaMask.");
		}
	};

	const updateVotes = async () => {
		const contractToUse = contract || readOnlyContract;
		if (contractToUse) {
			try {
				const votes = await contractToUse.getVotes(postId);
				setUpvotes(Number(votes[0]));
				setDownvotes(Number(votes[1]));
			} catch (error) {
				console.error("Error fetching votes:", error);
			}
		}
	};
	useEffect(() => {
		updateVotes();
		const interval = setInterval(updateVotes, 5000); // Update every 5 seconds
		return () => clearInterval(interval);
	}, [contract, readOnlyContract, postId]);

	const handleVote = async (isUpvote: boolean) => {
		if (contract && provider) {
			try {
				const tx = await contract.vote(postId, isUpvote);
				await tx.wait();
				updateVotes();
			} catch (error) {
				console.error("Error voting:", error);
			}
		}
	};

	return (
		 <div>
			<h1>Voting System</h1>
			{!contract && <button onClick={connectWallet}>Connect Wallet</button>}
			<div>
				<label htmlFor='postId'>Post ID: </label>
				<input
					id='postId'
					type='number'
					value={postId}
					onChange={(e) => setPostId(Number(e.target.value))}
				/>
			</div>
			<div>
				<p>Upvotes: {upvotes}</p>
				<p>Downvotes: {downvotes}</p>
			</div>
			<button onClick={() => handleVote(true)}>Upvote</button>
			<button onClick={() => handleVote(false)}>Downvote</button>
		</div> 
	);
};

export default VotingSystem;
