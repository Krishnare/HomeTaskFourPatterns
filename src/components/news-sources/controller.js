import urlConstructor from "../../config.json";
import NewsSourceModel from "./model.js";

let httpurl = `${urlConstructor.urlConstructor[0].apiURL}${
  urlConstructor.urlConstructor[4].apiSources
}${urlConstructor.urlConstructor[3].apiKey}`;

var handler = {
  get: function(obj, prop) {
    if (prop === "get") {
      const innerCall = new Proxy(obj, {
        apply: function(target, thisarg, args) {
          target.fetch(...args);
        }
      });
      innerCall(httpurl);
    }
  }
};

var proxy = new Proxy(NewsSourceModel, handler);
proxy.get = "get";
proxy.get;
