import renderHtml from "./newssourceComponent.js";
import SourceFetch from "./sourceFetch.js";
import urlConstructor from "./config.js";
import CustomError from "./errorHandler.js";

class lazyload {
  constructor() {
    this.sourceFetches = new SourceFetch();
    this.renderHTML = new renderHtml();
  }
  constructingLoad() {
    const newsBtn = document.getElementById("newsSourceBtn");
    const sourceSelectBox = document.getElementById("newsSource");
    newsBtn.addEventListener("click", () => {
      urlConstructor.urlConstructor.newsCategory = sourceSelectBox.value;
      let url =
        urlConstructor.urlConstructor.url +
        urlConstructor.urlConstructor.newsCategory +
        urlConstructor.urlConstructor.apiKey;
      this.sourceFetches.get(url).then(value => {
        this.renderHTML.NewssourceComponent(value);
      }).catch (error =>{
        new CustomError(error);
      });
    });
  }
}

var loader = new lazyload();
loader.constructingLoad();
