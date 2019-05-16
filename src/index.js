import "./styles/main.scss";
import urlConstructor from "./config.json";
// import ApiCall from "./apiRequest.js";
import Api from './sourceFetch'

let baseUrl = urlConstructor.urlConstructor[0].apiURL;
let apiKey = urlConstructor.urlConstructor[1].apiKey
// let loadUrl = "https://newsapi.org/v1/sources?apiKey=720c0314e8b2423eb7e1ffca5a1eeeb1"
console.log(baseUrl, apiKey);

const handler = {
  get: function(target, name) {
    console.log(`calling: ${name}`);
    return target[name]
  }
};

const api = new Api(baseUrl, apiKey);
const onloadApi = new Api(baseUrl, apiKey)
export const proxy = new Proxy(api, handler);
export const onLoadProxy = new Proxy(onloadApi, handler);

// alert(proxy.get());
// proxy.apiUrl = urlConstructor.urlConstructor[0].apiURL;
// proxy.sourceID = urlConstructor.urlConstructor[4].apiSources;
// proxy.apiKey = urlConstructor.urlConstructor[3].apiKey;
// proxy;