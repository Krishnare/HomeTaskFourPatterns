import ErrorPopupHandler from "./errorHandler.js";

export default class SourceFetcher {
  constructor() {
    this.data;
  }
  async get(url) {
    try {
      let response = await fetch(url);
      if (response.status === 200) {
        this.data = await response.json();
        new SourceFetcher().NewssourceSelectComponent(this.data);
      } else {
        await ErrorPopupHandler().openPopup();
      }
    } catch (error) {
      ErrorPopupHandler().openPopup(error);
    }
  }
  NewssourceSelectComponent(data) {
    const sourceSelectBox = document.getElementById("newsSource");
    data.sources.map(({ id }, index) => {
      const selectOptions = document.createElement("option");
      selectOptions[index] += selectOptions.text = id;
      sourceSelectBox.appendChild(selectOptions);
    });
  }
}
