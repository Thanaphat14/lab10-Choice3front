import axios, { type AxiosResponse } from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/auction-items',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getAuctions() {
    return apiClient.get(``);
  },
  getAuction(id: number) {
    return apiClient.get(`/${id}`);
  },
  getAuctionsByKeyword(description: string, type: string): Promise<AxiosResponse<Auction[]>> {
    return apiClient.get<Auction[]>(`/search?description=${description}&type=${type}`);
  }
}
