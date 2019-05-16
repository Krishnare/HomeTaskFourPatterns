import ErrorPopupHandler from "./errorHandler.js";

export default class Api {
  static async get(url) {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        return response.json();
      } else {
        await ErrorPopupHandler.getInstance();
      }
    } catch (error) {
      await ErrorPopupHandler.getInstance(error);
    }
  }
}