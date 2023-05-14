require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

var INFURA_KEY = "YOUR INFURE ACCOUNT KEY";
const mnemonic = "YOUR WALLET MNEMONIC";

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 31337
    },
  },
  bsctestnet: {
    url: "https://data-seed-prebsc-1-s1.binance.org:8545",
    chainId: 97,
    gasPrice: 20000000000,
    accounts: { mnemonic: mnemonic }
  },
};

