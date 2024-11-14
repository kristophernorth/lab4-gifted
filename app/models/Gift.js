

export class Gift {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
    this.creatorId = data.creatorId
    this.profileIsOpened = data.profileIsOpened
  }

  get openedHTMLTemplate() {
    return `
    <div class="col-md-4 card">
      <img
        src="${this.url}"
        alt="bear">
      <p>${this.tag}</p>
    </div>
  `
  }

  get unopenedTemplate() {
    return `
    <div class="col-md-4 card">
      <img class="card-img"
        src="${this.url}"
        alt="bear">
      <div class="card-img-overlay">
        <p class="card-text text-light">${this.tag}</p>
      </div>
    </div>
  `
  }

  get cardHTMLTemplate() {
    return this.opened ? this.openedHTMLTemplate : this.unopenedTemplate
  }

}

