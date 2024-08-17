import { Aptos, AptosConfig, Network, Account, Ed25519PrivateKey } from "@aptos-labs/ts-sdk";

// Replace with your contract address and module name
const CONTRACT_ADDRESS = "0x7316d856be8b1b4da3fedbbc5d91e8e0822609efbb66c2636ee6012b3052b3a7"; // Your deployed contract address
const MODULE_NAME = "nft_sbt";

// Aptos network configuration
const config = new AptosConfig({ network: Network.DEVNET });
const aptos = new Aptos(config);

export async function mintNFT(
  account: Account,
  name: string,
  description: string
): Promise<string> {
  const transaction = await aptos.transaction.build.simple({
    sender: account.accountAddress,
    data: {
      function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::mint_nft`,
      typeArguments: [],
      functionArguments: [name, description],
    },
  });

  const pendingTransaction = await aptos.signAndSubmitTransaction({
    signer: account,
    transaction,
  });

  const response = await aptos.waitForTransaction({transactionHash: pendingTransaction.hash});

  return response.hash;
}

export async function mintSBT(
  account: Account,
  name: string,
  description: string
): Promise<string> {
  const transaction = await aptos.transaction.build.simple({
    sender: account.accountAddress,
    data: {
      function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::mint_sbt`,
      typeArguments: [],
      functionArguments: [name, description],
    },
  });

  const pendingTransaction = await aptos.signAndSubmitTransaction({
    signer: account,
    transaction,
  });

  const response = await aptos.waitForTransaction({transactionHash: pendingTransaction.hash});

  return response.hash;
}

export async function transferNFT(
  account: Account,
  to: string,
  tokenId: string
): Promise<string> {
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

  const response = await aptos.waitForTransaction({transactionHash: pendingTransaction.hash});

  return response.hash;
}

export async function getNFTInfo(tokenId: string): Promise<{name: string, description: string, creationTimestamp: number}> {
  const resource = await aptos.getAccountResource({
    accountAddress: tokenId,
    resourceType: `${CONTRACT_ADDRESS}::${MODULE_NAME}::NFT`,
  });
  const data = resource.data as any;
  return {
    name: data.name,
    description: data.description,
    creationTimestamp: parseInt(data.creation_timestamp),
  };
}

export async function getSBTInfo(tokenId: string): Promise<{name: string, description: string, creationTimestamp: number}> {
  const resource = await aptos.getAccountResource({
    accountAddress: tokenId,
    resourceType: `${CONTRACT_ADDRESS}::${MODULE_NAME}::SBT`,
  });
  const data = resource.data as any;
  return {
    name: data.name,
    description: data.description,
    creationTimestamp: parseInt(data.creation_timestamp),
  };
}

// Helper function to create an account from a private key
export function createAccountFromPrivateKey(privateKeyHex: string): Account {
  const privateKey = new Ed25519PrivateKey(privateKeyHex);
  return Account.fromPrivateKey({ privateKey });
}