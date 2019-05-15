import ErrorPopupHandler from "./errorHandler.js";
import IntilizerClass from "./SourceFetchService.js";
import NewssourceSelectComponent from './sourceRender';

export default class SourceFetcher {
  static async get(url) {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        NewssourceSelectComponent.renderHtml(data);
        IntilizerClass.run();
      } else {
        await ErrorPopupHandler.getInstance();
      }
    } catch (error) {
      await ErrorPopupHandler.getInstance(error);
    }
  }
}
