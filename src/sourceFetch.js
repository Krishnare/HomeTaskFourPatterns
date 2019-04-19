import CustomError from './errorHandler.js'

export default class ApiFetcher {
  async fetch(url) {
    try {
      let response = await fetch(url);
      return await response.json();
      throw new CustomError();
    } catch (error) {
      alert(error.message);
    }
  }
}
