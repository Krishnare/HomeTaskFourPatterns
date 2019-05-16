import ErrorPopupHandler from "./errorHandler.js";

export default class Api {
  constructor(apiUrl, apiKey) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }
  request(url, method = "GET") {
    return fetch(`${this.apiUrl}${url}${this.apiKey}`, { method });
  }
  get(url) {
    this.request(url, "GET");
  }
}
