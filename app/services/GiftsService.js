import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js";


class GiftsService {
  async getGifts() {
    const response = await api.get('api/gifts')
    console.log('got gifts', response.data);
    const gifts = response.data.map(giftPOJO => new Gift(giftPOJO))
    AppState.gifts = gifts
  }

  async openGift(giftId) {
    const giftData = { opened: true }
    const response = await api.put(`api/gifts/${giftId}`, giftData)
    console.log('opened gift', response.data);
    const openedGift = new Gift(response.data)
    const giftIndex = AppState.gifts.findIndex(gift => gift.id == giftId)
    AppState.gifts.splice(giftIndex, 1, openedGift)
  }

  async createGift(giftData) {
    const response = await api.post('api/gifts', giftData)
    console.log('created gift', response.data);
    const gift = new Gift(response.data)
    AppState.gifts.unshift(gift)
  }

  async deleteGift(giftId) {
    const response = await api.delete(`api/gifts/${giftId}`)
    console.log('deleted gift', response.data);
    const giftIndex = AppState.gifts.findIndex(gift => gift.id == giftId)
    AppState.gifts.splice(giftIndex, 1)
  }

}

export const giftsService = new GiftsService