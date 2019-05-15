import ErrorPopupHandler from "./errorHandler.js";
import ErrorPopup from "./errorHandler.js";
import NewsArticleRender from './newsArticleRender';

export default class ArticlesFetcher {
  async get(url) {
    try {
      let response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        NewsArticleRender.renderHtml(data);
      } else {
        await ErrorPopupHandler.getInstance();
      }
    } catch (error) {
      await ErrorPopupHandler.getInstance(error);
    }
  }

}
