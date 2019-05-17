import ErrorPopupHandler from "./errorHandler.js";

export default class Api {
  constructor(apiUrl, apiKey, sourceID) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
    this.data = "";
    this.sourceID = sourceID;
    if (sourceID === undefined) {
      this.sourceID = "";
    }
    this.url = `${this.apiUrl}${this.sourceID}${this.apiKey}`;
  }
  async request(url, method = "GET") {
    try {
      let response = await fetch(this.url, { method });
      if (response.status === 200) {
        this.data = await response.json();
      } else {
        await new ErrorPopupHandler().getInstance();
      }
      return this.data;
    } catch (error) {
      new ErrorPopupHandler().getInstance(error);
    }
  }
  async get(url) {
    return await this.request(url, "GET");
  }
}
