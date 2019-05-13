import errorPopupHandler from "../../../src/errorHandler";

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
