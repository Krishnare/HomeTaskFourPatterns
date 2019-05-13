import "./styles/main.scss";
import urlConstructor from "./config.json";
import SourceFetcher from "./sourceFetch.js";

let httpurl = `${urlConstructor.urlConstructor[0].apiURL}${
  urlConstructor.urlConstructor[4].apiSources
}${urlConstructor.urlConstructor[3].apiKey}`;

const handler = {
  get: function(obj, prop) {
    if (prop === "fetch") {
      const innerCall = new Proxy(obj, {
        apply: function(target, thisarg, args) {
          target.fetch(...args);
        }
      });
      innerCall(httpurl);
    }
  }
};
const proxy = new Proxy(SourceFetcher, handler);
proxy.fetch = "fetch";
proxy.fetch;
