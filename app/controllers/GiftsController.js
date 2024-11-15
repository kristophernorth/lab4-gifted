import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class GiftsController {
  constructor() {
    AppState.on('account', this.getGifts)
    AppState.on('gifts', this.drawGifts)
  }

  async getGifts() {
    try {
      await giftsService.getGifts()
    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
  }

  async openGift(giftId) {
    try {
      await giftsService.openGift(giftId)
    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
  }

  async createGift() {
    try {
      event.preventDefault()
      const giftFormElm = event.target
      const giftData = getFormData(giftFormElm)
      await giftsService.createGift(giftData)
      giftFormElm.reset()
    } catch (error) {
      Pop.error(error)
      console.error(error);

    }
  }

  async deleteGift(giftId) {
    try {
      const itemToDelete = await Pop.confirm('Are you positive?')
      if (!itemToDelete) return
      await giftsService.deleteGift(giftId)
    } catch (error) {
      Pop.error(error)
    }
  }

  drawGifts() {
    const gifts = AppState.gifts
    let htmlContent = ''
    gifts.forEach(gift => htmlContent += gift.cardHTMLTemplate)
    setHTML('gifts', htmlContent)
    console.log('draw gifts');
  }

}