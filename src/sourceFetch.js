import ErrorPopup from "./errorHandler.js";
import IntilizerClass from "./SourceFetchService.js";
export default class SourceFetcher {
  static async fetch(url) {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        SourceFetcher.NewssourceSelectComponent(data);
        IntilizerClass.run();
      } else {
        await ErrorPopup.open();
      }
    } catch (error) {
      ErrorPopup.open(error);
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
