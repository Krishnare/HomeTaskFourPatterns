import ErrorPopupHandler from "./errorHandler.js";
import IntilizerClass from "./SourceFetchService.js";
export default class SourceFetcher {
  constructor() {
    this.data;
  }
  static async fetch(url) {
    try {
      let response = await fetch(url);
      if (response.status === 200) {
        this.data = await response.json();
        SourceFetcher.NewssourceSelectComponent(this.data);
        IntilizerClass.run();
      } else {
        await ErrorPopupHandler().openPopup();
      }
    } catch (error) {
      ErrorPopupHandler().openPopup(error);
    }
  }
  static NewssourceSelectComponent(data) {
    const sourceSelectBox = document.getElementById("newsSource");
    data.sources.map(({ id }, index) => {
      const selectOptions = document.createElement("option");
      selectOptions[index] += selectOptions.text = id;
      sourceSelectBox.appendChild(selectOptions);
    });
  }
}
