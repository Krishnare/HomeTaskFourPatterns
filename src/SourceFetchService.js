import createTypeFuncIntials from "./index.js";
import renderHtml from "./newssourceComponent.js";
import SourceFetch from "./sourceFetch.js";
import urlConstructor from "./config.js";

class intilizerClass {
  constructor() {
    this.sourceFetches = new SourceFetch();
    this.renderHTML = new renderHtml();
    this.url = "";
  }
  run() {
    const newsBtn = document.getElementById("newsSourceBtn");
    newsBtn.addEventListener("click", () => {
      import(/* webpackChunkName: "lazyload" */ "./lazyload.js")
        .then(mod => {})
        .then(value => {
          console.log(value);
        });
    });
    this.httpurl =
      urlConstructor.urlOnload.url + urlConstructor.urlOnload.apiKey;
    this.sourceFetches.get(this.httpurl).then(value => {
      this.renderHTML.NewssourceSelectComponent(value);
    }).catch (error =>{
        new CustomError(error);
      });
  }
}

let IntilizerClass = new intilizerClass();
IntilizerClass.run();
export default IntilizerClass;
