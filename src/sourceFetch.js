import ErrorPopupHandler from "./errorHandler.js";

export default class Api {
  constructor(apiUrl, apiKey) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }
  async request(url, method = "GET") {
    try {
      url === undefined ? (url = "") : url;
      let response = await fetch(`${this.apiUrl}${url}${this.apiKey}`, {
        method
      });
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
    return await this.request(url, "GET");
  }
}
