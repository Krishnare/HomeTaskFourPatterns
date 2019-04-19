import urlConstructor from "./config.js";
import ApiFetcher from "./sourceFetch.js";
import NewssourceSelectComponent from "./newssourceSelectComponent.js";
import NewssourceComponent from "./newssourceComponent.js";

class NewsAppConent {
  constructor() {
    this.newssourceComponentClass = new NewssourceComponent(this);
    this.newssourceSelectComponent = new NewssourceSelectComponent(this);
  }
  intialize() {
    const sourceSelectBox = document.getElementById("newsSource");

    sourceSelectBox.addEventListener("click", event => {
      urlConstructor.newsCategory = event.target.value;
    });

    const newsBtn = document.getElementById("newsSourceBtn");
    newsBtn.addEventListener("click", () => {
      urlConstructor.urlConstructor.newsCategory = sourceSelectBox.value;
      let url =
        urlConstructor.urlConstructor.url +
        urlConstructor.urlConstructor.newsCategory +
        urlConstructor.urlConstructor.apiKey;

      this.newssourceSelectComponent.fetch(url).then(value => {
        this.newssourceSelectComponent.render(value);
      });
      import(/* webpackChunkName: "print" */ "./print.js").then(mod => {
        console.log(mod);
      });
    });
    this.newsSource = this.newssourceComponentClass.fetch().then(value => {
      this.newssourceComponentClass.render(value);
    });
  }
}

const intializeFunctions = new NewsAppConent();

intializeFunctions.intialize();
