import Api from "./sourceFetch";
import SourceFetch from "./sourceFetch.js";
import urlConstructor from "./config.json";
import errorPopupHandler from "./errorHandler.js";
import NewssourceSelectComponent from "./apiRequest.js";
import NewsArticleRender from "./newsArticleRender";

import {onLoadProxy, handler } from "./index";

export default class lazyload {
  static constructingLoad() {
    const sourceSelectBox = document.getElementById("newsSource");
    sourceSelectBox.addEventListener("change", event => {
      let selectCurrentVal = event.target.value;
      const apiArticleURL = urlConstructor.urlConstructor[2].apiArticleURL;
      const apiArticleKey = urlConstructor.urlConstructor[3].apiArticleKey;

      const onSelectionApi = new Api(apiArticleURL, apiArticleKey);
      const selectBoxProxy = new Proxy(onSelectionApi, handler);
        selectBoxProxy.get(selectCurrentVal).then(value => {
          NewsArticleRender.renderHtml(value);
        });
    });
  }
}
