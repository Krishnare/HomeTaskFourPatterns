import "./styles/main.scss";
import urlConstructor from "./config.json";
import NewssourceSelectComponent from "./apiRequest.js";

let httpurl = `${urlConstructor.urlConstructor[0].apiURL}${
  urlConstructor.urlConstructor[4].apiSources
}${urlConstructor.urlConstructor[3].apiKey}`;

const handler = {
  get: function(obj, prop) {
    if (prop === "api") {
      const innerCall = new Proxy(obj, {
        apply: function(target, thisarg, args) {
          target.fetch(...args);
        }
      });
      innerCall(httpurl);
    }
  }
};
const proxy = new Proxy(NewssourceSelectComponent, handler);
proxy.api = "api";
proxy.api;
