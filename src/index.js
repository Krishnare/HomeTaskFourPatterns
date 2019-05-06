import "./styles/main.scss";
import urlConstructor from "./config.json";
import SourceFetcher from "./sourceFetch.js";
import ArticlesFetcher from "./newssourceComponent.js";
import IntilizerClass from "./SourceFetchService.js";

export default class createTypeFuncIntials {
  static createTypeMethods(type) {
    let typesofRequest = "";
    switch (type) {
      case "Sources":
        typesofRequest = new SourceFetcher();
      case "Articles":
        typesofRequest = new ArticlesFetcher();
    }
  }
}

export const SourceFetchToMToClass = createTypeFuncIntials.createTypeMethods(
  "Sources"
);
export const renderHtmlToMToClass = createTypeFuncIntials.createTypeMethods(
  "Articles"
);
