import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";


export class GiftsController {
  constructor() {

  }

  async getGifts() {
    try {
      await giftsService.getGifts()
    } catch (error) {
      Pop.error(error)
      console.log(error);

    }
  }

}