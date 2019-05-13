import urlConstructor from "../../config.json";
import NewsArticleModel from "./model.js";
import NewsSourceModel from './model'

export default class NewsArticleController {
  static constructingLoad() {
    const sourceSelectBox = document.getElementById("newsSource");
    sourceSelectBox.addEventListener("change", event => {
      let selectCurrentVal = (urlConstructor.urlConstructor.sourceID =
        event.target.value);
      let url =
        urlConstructor.urlConstructor[0].apiURL +
        urlConstructor.urlConstructor[1].articleSource +
        selectCurrentVal +
        urlConstructor.urlConstructor[3].apiKey;
        NewsSourceModel.fetch(url);
    });
  }
}