import { AppState } from "../AppState.js"


export class Gift {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
    this.creatorId = data.creatorId
    this.profileIsOpened = data.profileIsOpened
  }

  get openedTemplate() {
    return `
    <div class="col-md-4 card">
      <img
        src="${this.url}"
        alt="bear">
      <p>${this.tag}</p>
      ${this.deleteButton}
    </div>
    `
  }

  get unopenedTemplate() {
    return `
    <div onclick="app.GiftsController.openGift('${this.id}')" class="col-md-4 card" role="button">
      <img class="card-img"
        src="${this.url}"
        alt="bear">
      <div class="card-img-overlay">
        <p class="card-text text-light">${this.tag}</p>
        </div>
        ${this.deleteButton}
    </div>
    `
  }

  get cardHTMLTemplate() {
    return this.opened ? this.openedTemplate : this.unopenedTemplate
  }

  get deleteButton() {
    if (this.creatorId != AppState.account.id) return ''
    return `
    <button onclick="app.GiftsController.deleteGift('${this.id}')" class="btn btn-danger">Delete</button>
    `
  }

}

