import ErrorPopup from "../../../src/errorHandler";
import NewsArticleView from "./views";
import intilizerClass from "./intializer";

export default class NewsSourceModel {
  static async fetch(url) {
    try {
      let response = await fetch(url);
      if (response.status === 200) {
        this.data = await response.json();
        NewsArticleView.newssourceRender(this.data);
      } else {
        await new ErrorPopup().open();
      }
    } catch (error) {
      await new ErrorPopup().open(error);
    }
  }
}
