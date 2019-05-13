// import SourceFetcher from './sourceFetch.js';

export default class ErrorPopup {
  open(error) {
    let errorPopup = document.getElementById("errorPopup");
    if (!errorPopup) {
      let createDiv = document.createElement("div");
      let createDivShadow = document.createElement("div");
      createDivShadow.setAttribute("id", "shadowPopup");
      createDiv.setAttribute("id", "errorPopup");
      createDiv.setAttribute("class", "errorPopupClass open");
      let createSpan = document.createElement("span");
      createSpan.setAttribute("class", "close");
      createSpan.setAttribute("id", "closePopup");
      createSpan.innerText = "X";

      document.getElementsByTagName("body")[0].appendChild(createDivShadow);
      document.getElementsByTagName("body")[0].appendChild(createDiv);
      let getId = document.getElementById("errorPopup");
      getId.innerText = error.message;
      getId.appendChild(createSpan);

      ErrorPopup.close();
    }
  }
  static close() {
    const closePopup = document.getElementById("closePopup");
    const getIdErroPopup = document.getElementById("errorPopup");
    let createDivShadow = document.getElementById("shadowPopup");

    closePopup.addEventListener("click", () => {
      getIdErroPopup.remove();
      createDivShadow.remove();
    });
  }
  static getInstance() {
    import(
      /* webpackChunkName: "lazyload" */ "../src/components/news-articles/controller"
    )
      .then(module => {
        const constructingLoad = module.default;
        constructingLoad.constructingLoad();
      })
      .catch(function(error) {
        ErrorPopupHandler.open(error);
      });
  }
}
const ErrorPopupHandler = new ErrorPopup();
