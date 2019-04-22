import CustomError from "./errorHandler.js";

export default class SourceFetch {
  constructor() {
    this.requests = [];
  }
  async get(url) {
    try {
      let response = await fetch(url);
      return await response.json();
      throw new CustomError();
    } catch (error) {
      alert(error.message);
    }
  }
  post(req) {
    this.requests.push(req);
  }
}
