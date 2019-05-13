import ErrorPopup from './errorHandlerPopup';

export default class ErrorPopupHandler {
  static async getInstance(error) {
    ErrorPopup.open(error);
  }
}