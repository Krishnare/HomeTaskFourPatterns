import createTypeFuncIntials from "./index.js";
import renderHtml from "./newssourceComponent.js";
import SourceFetcher from "./sourceFetch.js";
import urlConstructor from "./config.json";
import errorPopupHandler from "./errorHandler.js";


class intilizerClass {
  run() {
    const newsBtn = document.getElementById("newsSource");
    newsBtn.addEventListener("change", () => {
      errorPopupHandler.getInstance();
    });
  }
}

let IntilizerClass = new intilizerClass();
export default IntilizerClass;
