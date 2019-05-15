import errorPopupHandler from "./errorHandler.js";

export default class ArticlesFetcher {
  async get(url) {
    try {
      let response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
      } else {
        await new errorPopupHandler().openPopup();
      }
    } catch (error) {
      new errorPopupHandler().openPopup(error);
    }
  }
}
