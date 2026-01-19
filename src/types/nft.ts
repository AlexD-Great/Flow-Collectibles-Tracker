export interface NFT {
  id: string
  name: string
  description?: string
  image: string
  collection: string
  collectionAddress: string
  serialNumber?: number
  rarity?: string
  floorPrice?: number
  lastSalePrice?: number
  acquiredPrice?: number
  acquiredDate?: Date
}

export interface Collection {
  name: string
  address: string
  totalNFTs: number
  floorPrice: number
  totalValue: number
}

export interface Portfolio {
  totalValue: number
  totalCost: number
  profitLoss: number
  profitLossPercentage: number
  collections: Collection[]
  nfts: NFT[]
}

export interface Alert {
  id: string
  type: "price_drop" | "floor_break" | "undercut" | "big_sale" | "liquidity"
  nftId?: string
  collectionAddress?: string
  threshold?: number
  enabled: boolean
  createdAt: Date
}

export interface MarketListing {
  id: string
  nftId: string
  price: number
  marketplace: string
  listedAt: Date
  seller: string
}
