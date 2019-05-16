import Api from "./sourceFetch";
import NewssourceSelectRender from "./sourceRender";
import IntilizerClass from "./SourceFetchService.js";

export default class ApiCall {
  static async fetch(httpurl) {
    await Api.get(httpurl).then(value => {
        NewssourceSelectRender.renderHtml(value);
        IntilizerClass.run();
    });
  }
}

