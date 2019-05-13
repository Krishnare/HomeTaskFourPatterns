// import createTypeFuncIntials from "./index.js";
// import renderHtml from "./newssourceComponent.js";
// import urlConstructor from "./config.json";
import ErrorPopupHandler from "./errorHandler.js";

class intilizerClass {
  run() {
    const newsBtn = document.getElementById("newsSource");
    newsBtn.addEventListener("change", () => {
      import(/* webpackChunkName: "lazyload" */ "./lazyload")
      .then(module => {
        const constructingLoad = module.default;
        constructingLoad.constructingLoad();
      })
      .catch(function(error) {
        ErrorPopupHandler.getInstance(error);
        // ErrorPopupHandler.open(error);
      });
      // ErrorPopup.getInstance();
    });
  }
}

let IntilizerClass = new intilizerClass();
export default IntilizerClass;
