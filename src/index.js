import "./styles/main.scss";
import urlConstructor from "./config.json";
import ApiCall from "./apiRequest.js";

let newsSourceURL = `${urlConstructor.urlConstructor[0].apiURL}${
  urlConstructor.urlConstructor[4].apiSources
}${urlConstructor.urlConstructor[3].apiKey}`;

const handler = {
  apply: function(target, thisArg, argumentsList) {
    console.log(`Function Logged: API`);
  }
};

const proxy = new Proxy(ApiCall, handler);
proxy();
proxy.fetch(newsSourceURL);