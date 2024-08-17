/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");

const PRIVATE_KEY = "";

module.exports = {
  solidity: "0.8.24",
  networks: {
    scrollTestnet: {
      url: "https://scroll-sepolia.drpc.org",
      accounts: [PRIVATE_KEY],
      chainId: 534351
    }
  }
};
