import "./styles/main.scss";
import urlConstructor from "./config.js";
import SourceFetch from "./sourceFetch.js";
import renderHtml from "./newssourceComponent.js";
import IntilizerClass from "./SourceFetchService.js";

export default class createTypeFuncIntials {
  createTypeMethods(type) {
    let typesofRequest = "";
    switch (type) {
      case "SourceFetch":
        typesofRequest = new SourceFetch();
      case "renderHtml":
        typesofRequest = new renderHtml();
    }
  }
}

const factory = new createTypeFuncIntials();
export const SourceFetchToMToClass = factory.createTypeMethods("SourceFetch");
export const renderHtmlToMToClass = factory.createTypeMethods("renderHtml");
