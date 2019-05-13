export default class ErrorPopup {
  static open(error) {
    const errorPopup = document.getElementById("errorPopup");
    const contentContainer = document.getElementById("newsDetails");

    if (!errorPopup) {
      let errorPopupHtml = `
      <div id="maskPopup">
        <div id="errorPopup" class ="errorPopupClass">
          <span class="close" id="closePopup">X</span>
            ${error.message}
        </div>
      </div>`;
      contentContainer.insertAdjacentHTML("afterend", errorPopupHtml);
      ErrorPopup.close();
    }
  }
  static close() {
    const closePopup = document.getElementById("closePopup");
    const getIdErroPopup = document.getElementById("errorPopup");
    const createDivShadow = document.getElementById("maskPopup");

    closePopup.addEventListener("click", () => {
      getIdErroPopup.remove();
      createDivShadow.remove();
    });
  }
}
