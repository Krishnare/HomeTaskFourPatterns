import ErrorPopup from "../../../src/errorHandler";
import NewsSourceView from "./views";

export default class  NewsSourceModel {
  static async fetch(url) {
    try {
      let response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        NewsSourceView.NewssourceSelectBox(data);
      } else {
        await new ErrorPopup().open();
      }
    } catch (error) {
      new ErrorPopup().open(error);
    }
  }
}
