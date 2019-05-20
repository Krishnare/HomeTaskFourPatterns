import "./styles/main.scss";
import urlConstructor from "./config.json";
import Api from "./sourceFetch";
import NewssourceSelectRender from "./sourceRender";

let baseUrl = urlConstructor.urlConstructor[0].apiURL;
let apiKey = urlConstructor.urlConstructor[1].apiKey;

export const handler = {
  get: function(target, name) {
    console.log(`calling: ${name}`);
    return target[name];
  }
};

const onloadApi = new Api(baseUrl, apiKey);
export const onLoadProxy = new Proxy(onloadApi, handler);

let fullUrl = baseUrl + apiKey;
onLoadProxy.get().then(value => {
  NewssourceSelectRender.renderHtml(value);
});
