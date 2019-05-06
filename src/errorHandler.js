export default class errorPopupHandler {
  openPopup(error) {
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

      errorPopupHandler.closePopup();
    }
  }
  static closePopup() {
    const closePopup = document.getElementById("closePopup");
    const getIdErroPopup = document.getElementById("errorPopup");
    let createDivShadow = document.getElementById("shadowPopup");

    closePopup.addEventListener("click", () => {
      getIdErroPopup.remove();
      createDivShadow.remove();
    });
  }
}
const ErrorPopupHandler = new errorPopupHandler();
ErrorPopupHandler;
