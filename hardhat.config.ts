require("@nomiclabs/hardhat-etherscan")
require("dotenv").config();


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: "https://matic-testnet-archive-rpc.bwarelabs.com",
      accounts: [
        process.env.PRIVATE_KEY
      ]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_KEY
  }
};
