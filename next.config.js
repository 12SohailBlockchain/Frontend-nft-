/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NFT_MARKET_CONTRACT_ADDRESS:"0x5FbDB2315678afecb367f032d93F642f64180aa3",
    NFT_CONTRACT_ADDRESS:"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
    CHAIN_ID:97
  },
  reactStrictMode: true,
  images: {
    domains: ['ipfs.infura.io'],
  },
}

module.exports = nextConfig
