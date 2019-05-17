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
        });
    });
  }
}

let IntilizerClass = new intilizerClass();
export default IntilizerClass;
