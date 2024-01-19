require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("./tasks/block-number");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || 123
const PRIVATE_KEY = process.env.PRIVATE_KEY || 123
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || 123
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || 123
module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    sepolia:{
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost:{
      url:"http://127.0.0.1:8545/",
      chainId:31337,
      //accounts:Hardhat already gives them
    },
  },
  solidity: "0.8.9",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter:{
    enabled:true,
    outputFile:"gas-report.txt",
    noColors:true,
    currency:"USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
  }
};
