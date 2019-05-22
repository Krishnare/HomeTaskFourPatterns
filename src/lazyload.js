import Api from "./sourceFetch";
import urlConstructor from "./config.json";
import NewsArticleRender from "./newsArticleRender";
import {onLoadProxy, handler } from "./index";

export default class lazyload {
  static constructingLoad() {
    const sourceSelectBox = document.getElementById("newsSource");
    sourceSelectBox.addEventListener("change", event => {
      let selectCurrentVal = event.target.value+'&';
      const apiArticleURL = urlConstructor.urlConstructor[2].apiArticleURL;
      const apiArticleKey = urlConstructor.urlConstructor[1].apiKey;

      const onSelectionApi = new Api(apiArticleURL, apiArticleKey);
      const selectBoxProxy = new Proxy(onSelectionApi, handler);
        selectBoxProxy.get(selectCurrentVal).then(value => {
          NewsArticleRender.renderHtml(value);
        });
    });
  }
}
