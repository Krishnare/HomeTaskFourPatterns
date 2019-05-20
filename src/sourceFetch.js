import ErrorPopupHandler from "./errorHandler.js";

export default class Api {
  constructor(apiUrl, apiKey, sourceID) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }
  async request(url, method = "GET") {
    try {
      let response = await fetch(`${url}`, { method });
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        await ErrorPopupHandler.getInstance();
      }
    } catch (error) {
      ErrorPopupHandler.getInstance(error);
    }
  }
  async get(url) {
    if (url === undefined) url = "";
    return await this.request(`${this.apiUrl}${url}${this.apiKey}`, "GET");
  }
}
