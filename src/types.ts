export interface Auction {
  id: number
  successful_bid_id: number
  description: String
  type: String
}

export interface MessageState {
  message: string
}

export interface AuctionState {
  auction: Auction | null
}
