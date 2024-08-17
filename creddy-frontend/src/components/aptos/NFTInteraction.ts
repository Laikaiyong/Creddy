import { AptosClient, AptosAccount, TxnBuilderTypes, BCS, HexString } from "aptos";

export interface Trait {
    trait_type: string;
    value: string;
}

export interface TokenInfo {
    name: string;
    description: string;
    image_url: string;
    traits: Trait[];
    creationTimestamp: number;
}

// Replace with your contract address and module name
const CONTRACT_ADDRESS = "0x7316d856be8b1b4da3fedbbc5d91e8e0822609efbb66c2636ee6012b3052b3a"; // Your deployed contract address
const MODULE_NAME = "nft_sbt";

// Aptos node URL (replace with the appropriate network)
const NODE_URL = "https://fullnode.testnet.aptoslabs.com";

const client = new AptosClient(NODE_URL);

export async function mintNFT(
  account: AptosAccount,
  name: string,
  description: string,
  image_url: string,
  traits: Trait[]
): Promise<string> {
    const payload = {
        type: "entry_function_payload",
        function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::mint_nft`,
        type_arguments: [],
        arguments: [
            name,
            description,
            image_url,
            traits.map(t => t.trait_type),
            traits.map(t => t.value),
        ],
    };

    const txnRequest = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, txnRequest);
    const txnResult = await client.submitTransaction(signedTxn);
    await client.waitForTransaction(txnResult.hash);

    return txnResult.hash;
}

export async function mintSBT(
    account: AptosAccount,
    name: string,
    description: string,
    image_url: string,
    traits: Trait[]
): Promise<string> {
    const payload = {
        type: "entry_function_payload",
        function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::mint_sbt`,
        type_arguments: [],
        arguments: [
            name,
            description,
            image_url,
            traits.map(t => t.trait_type),
            traits.map(t => t.value),
        ],
    };

    const txnRequest = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, txnRequest);
    const txnResult = await client.submitTransaction(signedTxn);
    await client.waitForTransaction(txnResult.hash);

    return txnResult.hash;
}

export async function transferNFT(
  account: AptosAccount,
  to: string,
  tokenId: string
): Promise<string> {
  const payload = {
    type: "entry_function_payload",
    function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::transfer_nft`,
    type_arguments: [],
    arguments: [to, tokenId],
  };

  const txnRequest = await client.generateTransaction(account.address(), payload);
  const signedTxn = await client.signTransaction(account, txnRequest);
  const txnResult = await client.submitTransaction(signedTxn);
  await client.waitForTransaction(txnResult.hash);

  return txnResult.hash;
}
export async function getNFTInfo(tokenId: string): Promise<TokenInfo> {
    const resource = await client.getAccountResource(
        tokenId,
        `${CONTRACT_ADDRESS}::${MODULE_NAME}::NFT`
    );
    const data = resource.data as any;
    return {
        name: data.name,
        description: data.description,
        image_url: data.image_url,
        traits: data.traits.map((t: any) => ({
            trait_type: t.trait_type,
            value: t.value,
        })),
        creationTimestamp: parseInt(data.creation_timestamp),
    };
}

export async function getSBTInfo(tokenId: string): Promise<TokenInfo> {
    const resource = await client.getAccountResource(
        tokenId,
        `${CONTRACT_ADDRESS}::${MODULE_NAME}::SBT`
    );
    const data = resource.data as any;
    return {
        name: data.name,
        description: data.description,
        image_url: data.image_url,
        traits: data.traits.map((t: any) => ({
            trait_type: t.trait_type,
            value: t.value,
        })),
        creationTimestamp: parseInt(data.creation_timestamp),
    };
}