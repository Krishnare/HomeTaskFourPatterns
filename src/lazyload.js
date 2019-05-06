import ArticlesFetcher from "./newssourceComponent.js";
import SourceFetch from "./sourceFetch.js";
import urlConstructor from "./config.json";
import errorPopupHandler from "./errorHandler.js";

class lazyload {
  constructor() {
    this.sourceFetches = new SourceFetch();
    this.articlesFetcher = new ArticlesFetcher();
  }
  constructingLoad() {
    const newsBtn = document.getElementById("newsSourceBtn");
    const sourceSelectBox = document.getElementById("newsSource");
    sourceSelectBox.addEventListener("change", event => {
      let selectCurrentVal = urlConstructor.urlConstructor.sourceID = event.target.value;
      let url =
        urlConstructor.urlConstructor[0].apiURL +
        urlConstructor.urlConstructor[1].articleSource +
        selectCurrentVal +
        urlConstructor.urlConstructor[3].apiKey;
      this.articlesFetcher.get(url);
    });
  }
}

var loader = new lazyload();
loader.constructingLoad();
