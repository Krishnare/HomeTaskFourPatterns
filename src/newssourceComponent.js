import urlConstructor from "./config.js";
import ApiFetcher from "./sourceFetch.js";

export default class NewssourceComponent extends ApiFetcher {
  constructor(data) {
    super();
    this.httpurl =
      urlConstructor.urlOnload.url + urlConstructor.urlOnload.apiKey;
  }
  async fetch(httpurl) {
    return await super.fetch(this.httpurl);
  }
  render(data) {
    const sourceSelectBox = document.getElementById("newsSource");
    data.sources.map(({ id }, index) => {
      const selectOptions = document.createElement("option");
      selectOptions[index] += selectOptions.text = id;
      sourceSelectBox.appendChild(selectOptions);
    });
  }
}
