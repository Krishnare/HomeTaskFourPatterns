import Api from "./sourceFetch";
import NewssourceSelectRender from "./sourceRender";
import IntilizerClass from "./SourceFetchService.js";
import onLoadProxy from "./index";
let url = "";
export class ApiCall {
  fetchData() {
    return onLoadProxy.get().then(value => {
      NewssourceSelectRender.renderHtml(value);
      IntilizerClass.run();
    });
  }
}
const data = new ApiCall();
data.fetchData();
