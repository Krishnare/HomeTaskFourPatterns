import CustomError from "./errorHandler.js";

export default class SourceFetch {
  async get(url) {
    try {
      let response = await fetch(url);
      return response.json();
    } catch (error) {
      new CustomError(error);
    }
  }
}
