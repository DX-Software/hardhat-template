import dotenv from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "tsconfig-paths/register";
import "hardhat-gas-reporter";
import "@typechain/hardhat";
import "solidity-coverage";
import "hardhat-contract-sizer";

dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [];

export default {
  typechain: {
    outDir: "./build/typechain",
  },
  paths: {
    sources: "./src/contracts",
    tests: "./src/tests",
    cache: "./build/cache",
    artifacts: "./build/artifacts",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.13",
      },
    ],
  },
  networks: {
    56: {
      url: "https://bsc-dataseed.binance.org/",
      accounts,
    },
    97: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts,
      timeout: 100000,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS === "true",
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
  },
} as HardhatUserConfig;
