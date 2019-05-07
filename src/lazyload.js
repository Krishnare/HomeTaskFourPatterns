import ArticlesFetcher from "./newssourceComponent.js";
import SourceFetch from "./sourceFetch.js";
import urlConstructor from "./config.json";
import errorPopupHandler from "./errorHandler.js";

export default class lazyload {
  static constructingLoad() {
    let articlesFetcher = new ArticlesFetcher();
    const sourceSelectBox = document.getElementById("newsSource");
    sourceSelectBox.addEventListener("change", event => {
      let selectCurrentVal = (urlConstructor.urlConstructor.sourceID =
        event.target.value);
      let url =
        urlConstructor.urlConstructor[0].apiURL +
        urlConstructor.urlConstructor[1].articleSource +
        selectCurrentVal +
        urlConstructor.urlConstructor[3].apiKey;
      articlesFetcher.get(url);
    });
  }
}
