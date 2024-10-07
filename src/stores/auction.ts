import type { AuctionState, Auction } from '@/types'
import { defineStore } from 'pinia'

export const useAuctionStore = defineStore('auction', {
  state: (): AuctionState => ({
    auction: null
  }),
  actions: {
    setAuction(auction: Auction): void {
      this.auction = auction
    }
  }
})
