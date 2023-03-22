require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

var INFURA_KEY = "464cd65da94c48ad847f8248e7a8ff61";
const mnemonic = "common choose choose ticket switch hungry year series length analyst trophy library";

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

