import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { WalletConnectionDialog } from "./ConnectWalletDialog";
import { useToast } from "@/components/ui/use-toast";

const contractAddress = process.env.NEXT_PUBLIC_SCROLL_CONTRACT;
const contractABI = [
	"function vote(uint256 _postId, bool _isUpvote) external",
	"function getVotes(uint256 _postId) external view returns (uint256 upvotes, uint256 downvotes)",
];

interface VotingSystemProps {
	postId: number;
}

const VotingComponent: React.FC<VotingSystemProps> = ({ postId }) => {
	const { toast } = useToast();
	const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
	const [contract, setContract] = useState<ethers.Contract | null>(null);
	const [readOnlyContract, setReadOnlyContract] = useState<ethers.Contract | null>(null);

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
			return <WalletConnectionDialog connectWallet={connectWallet} isConnected={!!contract} />;
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
				// Show toast with link to explorer
				toast({
					title: "Vote submitted successfully!",
					description: (
						<a
							href={`https://sepolia.scrollscan.dev/tx/${tx.hash}`}
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-500 hover:underline'
						>
							View on Explorer
						</a>
					),
					duration: 5000,
				});
			} catch (error) {
				console.error("Error voting:", error);
			}
		} else {
			await connectWallet();
		}
	};

	return (
		<div className='flex flex-wrap gap-4 px-2 py-1 rounded-2xl bg-gray-100 drop-shadow-md justify-center m-2 text-xs'>
			<div className='flex'>
				<button onClick={() => handleVote(true)}>
					<AiFillCaretUp />
				</button>
			</div>
			<div className='flex'>{upvotes - downvotes}</div>
			<div className='flex'>
				<button onClick={() => handleVote(false)}>
					<AiFillCaretDown />
				</button>
			</div>
		</div>
	);
};

export default VotingComponent;
