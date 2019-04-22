import urlConstructor from "./config.js";
import sourceFetch from "./sourceFetch.js";
import sourceFetchService from "./SourceFetchService.js";
import proxyClass from "./newssourceComponent.js";

function init_Proxy() {
  const url = urlConstructor.urlOnload.url + urlConstructor.urlOnload.apiKey;
 let PROXY = new proxyClass(new sourceFetchService());
  PROXY.get(url).then(value => {
    PROXY.NewssourceSelectComponent(value);
  });

  const newsBtn = document.getElementById("newsSourceBtn");
  const sourceSelectBox = document.getElementById("newsSource");
  newsBtn.addEventListener("click", () => {
    urlConstructor.urlConstructor.newsCategory = sourceSelectBox.value;
    let url =
      urlConstructor.urlConstructor.url +
      urlConstructor.urlConstructor.newsCategory +
      urlConstructor.urlConstructor.apiKey;

      PROXY.get(url).then(value => {
        PROXY.NewssourceComponent(value);
      });
  });
}
init_Proxy();
