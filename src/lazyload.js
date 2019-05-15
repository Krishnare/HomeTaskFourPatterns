import Api from "./sourceFetch";
import SourceFetch from "./sourceFetch.js";
import urlConstructor from "./config.json";
import errorPopupHandler from "./errorHandler.js";
import NewssourceSelectComponent from "./apiRequest.js";
import NewsArticleRender from './newsArticleRender'

export default class lazyload {
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
        Api.get(url)
        .then((value)=>{
          NewsArticleRender.renderHtml(value)
        })
    });
  }
}
