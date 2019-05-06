import createTypeFuncIntials from "./index.js";
import renderHtml from "./newssourceComponent.js";
import SourceFetcher from "./sourceFetch.js";
import urlConstructor from "./config.json";
import ErrorPopupHandler from "./errorHandler.js";

class intilizerClass {
  constructor() {
    this.sourceFetches = new SourceFetcher();
    this.renderHTML = new renderHtml();
    this.url = "";
  }
  run() {
    const newsBtn = document.getElementById("newsSource");
    newsBtn.addEventListener("change", () => {
      import(/* webpackChunkName: "lazyload" */ "./lazyload.js");
    });
    this.httpurl = `${urlConstructor.urlConstructor[0].apiURL}${
      urlConstructor.urlConstructor[4].apiSources
    }${urlConstructor.urlConstructor[3].apiKey}`;

    this.sourceFetches.get(this.httpurl);
  }
}

let IntilizerClass = new intilizerClass();
IntilizerClass.run();
export default IntilizerClass;
