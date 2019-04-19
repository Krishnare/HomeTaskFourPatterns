import urlConstructor from "./config.js";
import ApiFetcher from "./sourceFetch.js";

export default class NewssourceSelectComponent extends ApiFetcher {
  constructor(data) {
    super();
  }
  async fetch(httpurl) {
    return await super.fetch(httpurl);
  }
  render(data) {
    const elementId = document.getElementById("newsDetails");
    let returnHtml = "",
      uniqueVal = [];
    if (data.status === "error") {
      returnHtml = `<div id="error">${data.message}</div>`;
    } else {
      data.articles.map(
        (
          { author, title, description, publishedAt, url, urlToImage },
          index
        ) => {
          uniqueVal = index === 0 ? `<h1>${author}</h1>` : "";
          returnHtml += `${uniqueVal}<div class="newsTitle">${title}</div><div class="newsDescription">${description}</div><div class="publishDate">${publishedAt}</div><div class="imageContainer"><a href="${url}" target="_blank"><img class ="imageLazy" src=${urlToImage} /></a></div>`;
        }
      );
    }
    elementId.innerHTML = returnHtml;
  }
}
