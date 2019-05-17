import ErrorPopup from './errorHandlerPopup';

export default class ErrorPopupHandler {
  static getInstance(error) {
    ErrorPopup.open(error);
  }
}