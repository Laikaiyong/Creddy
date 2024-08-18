import { Aptos, AptosConfig, Network, Account, KeylessAccount } from "@aptos-labs/ts-sdk";

// Replace with your contract address and module name
const CONTRACT_ADDRESS = "0x7316d856be8b1b4da3fedbbc5d91e8e0822609efbb66c2636ee6012b3052b3a7"; // Your deployed contract address
const MODULE_NAME = "nft_sbt";

// Aptos network configuration
const config = new AptosConfig({ network: Network.TESTNET });
const aptos = new Aptos(config);

export async function mintNFT(
	account: Account,
	name: string,
	description: string,
	imageUrl: string,
	traitTypes: string[],
	traitValues: string[]
): Promise<string> {
	const transaction = await aptos.transaction.build.simple({
		sender: account.accountAddress,
		data: {
			function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::mint_nft`,
			typeArguments: [],
			functionArguments: [name, description, imageUrl, traitTypes, traitValues],
		},
	});

	// Use the signAndSubmitTransaction method
	const pendingTransaction = await aptos.signAndSubmitTransaction({
		signer: account,
		transaction,
	});

	const response = await aptos.waitForTransaction({ transactionHash: pendingTransaction.hash });

	return response.hash;
}

export async function createCollection(
	account: Account,
	name: string,
	description: string,
	imageUrl: string
): Promise<string> {
	const createCollectionTransaction = await aptos.createCollectionTransaction({
		creator: account,
		description: description,
		name: name,
		uri: imageUrl,
	});

	const committedTxn = await aptos.signAndSubmitTransaction({
		signer: account,
		transaction: createCollectionTransaction,
	});

	return committedTxn.hash;
}

export async function mintSBT(
	account: KeylessAccount,
	name: string,
	description: string,
	imageUrl: string,
	traitTypes: string[],
	traitValues: string[]
): Promise<string> {
	try {
		const transaction = await aptos.transaction.build.simple({
			sender: account.accountAddress,
			data: {
				function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::mint_sbt`,
				typeArguments: [],
				functionArguments: [name, description, imageUrl, traitTypes, traitValues],
			},
			options: {
				maxGasAmount: 1000000,
				gasUnitPrice: 100,
			},
		});

		console.log("Transaction built:", transaction);

		const senderAuthenticator = aptos.transaction.sign({ signer: account, transaction });
		console.log("Transaction signed");

		const committedTransaction = await aptos.transaction.submit.simple({
			transaction,
			senderAuthenticator,
		});
		console.log("Transaction submitted:", committedTransaction);

		const response = await aptos.waitForTransaction({
			transactionHash: committedTransaction.hash,
		});
		console.log("Transaction response:", response);

		if (response.success === false) {
			throw new Error(`Transaction failed: ${JSON.stringify(response.vm_status)}`);
		}

		return response.hash;
	} catch (error) {
		console.error("Error in mintSBT:", error);
		throw error;
	}
}
export async function transferNFT(account: Account, to: string, tokenId: string): Promise<string> {
	const transaction = await aptos.transaction.build.simple({
		sender: account.accountAddress,
		data: {
			function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::transfer_nft`,
			typeArguments: [],
			functionArguments: [to, tokenId],
		},
	});

	const pendingTransaction = await aptos.signAndSubmitTransaction({
		signer: account,
		transaction,
	});

	const response = await aptos.waitForTransaction({ transactionHash: pendingTransaction.hash });

	return response.hash;
}

export async function getNFTInfo(tokenId: string): Promise<{
	name: string;
	description: string;
	imageUrl: string;
	traits: { traitType: string; value: string }[];
	creationTimestamp: number;
}> {
	const resource = await aptos.getAccountResource({
		accountAddress: tokenId,
		resourceType: `${CONTRACT_ADDRESS}::${MODULE_NAME}::NFT`,
	});
	const data = resource.data as any;
	return {
		name: data.name,
		description: data.description,
		imageUrl: data.image_url,
		traits: data.traits.map((trait: any) => ({
			traitType: trait.trait_type,
			value: trait.value,
		})),
		creationTimestamp: parseInt(data.creation_timestamp),
	};
}

export async function getSBTInfo(tokenId: string): Promise<{
	name: string;
	description: string;
	imageUrl: string;
	traits: { traitType: string; value: string }[];
	creationTimestamp: number;
}> {
	const resource = await aptos.getAccountResource({
		accountAddress: tokenId,
		resourceType: `${CONTRACT_ADDRESS}::${MODULE_NAME}::SBT`,
	});
	const data = resource.data as any;
	return {
		name: data.name,
		description: data.description,
		imageUrl: data.image_url,
		traits: data.traits.map((trait: any) => ({
			traitType: trait.trait_type,
			value: trait.value,
		})),
		creationTimestamp: parseInt(data.creation_timestamp),
	};
}

// Helper function to create an account from a private key
// export function createAccountFromPrivateKey(privateKeyHex: string): Account {
// 	const privateKey = new Ed25519PrivateKey(privateKeyHex);
// 	return Account.fromPrivateKey({ privateKey });
// }
