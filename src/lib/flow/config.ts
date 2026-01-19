export const FLOW_CONFIG = {
  network: process.env.NEXT_PUBLIC_FLOW_NETWORK || "mainnet",
  accessNodeAPI: process.env.NEXT_PUBLIC_ACCESS_NODE_API || "https://rest-mainnet.onflow.org",
  discoveryWallet: process.env.NEXT_PUBLIC_DISCOVERY_WALLET || "https://fcl-discovery.onflow.org/authn",
}

export const NFT_COLLECTIONS = {
  NBA_TOP_SHOT: {
    name: "NBA Top Shot",
    contractAddress: "0x0b2a3299cc857e29",
    contractName: "TopShot",
  },
  NFL_ALL_DAY: {
    name: "NFL All Day",
    contractAddress: "0xe4cf4bdc1751c65d",
    contractName: "AllDay",
  },
  UFC_STRIKE: {
    name: "UFC Strike",
    contractAddress: "0x329feb3ab062d289",
    contractName: "UFC",
  },
}

export const MARKETPLACES = {
  FLOWTY: {
    name: "Flowty",
    url: "https://flowty.io",
  },
  NBA_TOP_SHOT_MARKETPLACE: {
    name: "NBA Top Shot Marketplace",
    url: "https://nbatopshot.com/marketplace",
  },
  NFL_ALL_DAY_MARKETPLACE: {
    name: "NFL All Day Marketplace",
    url: "https://nflallday.com/marketplace",
  },
}
