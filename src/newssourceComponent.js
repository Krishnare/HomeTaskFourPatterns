export default class renderHtml {
  NewssourceSelectComponent(data){
      const sourceSelectBox = document.getElementById("newsSource");
      data.sources.map(({ id }, index) => {
          const selectOptions = document.createElement("option");
          selectOptions[index] += selectOptions.text = id;
          sourceSelectBox.appendChild(selectOptions);
      });
  }
  NewssourceComponent(data) {
      const elementId = document.getElementById("newsDetails");
      let returnHtml = "",
        uniqueVal = [];

        data.articles.map(
          (
            { author, title, description, publishedAt, url, urlToImage },
            index
          ) => {
            uniqueVal = index === 0 ? `<h1>${author}</h1>` : "";
            returnHtml += `${uniqueVal}<div class="newsTitle">${title}</div><div class="newsDescription">${description}</div><div class="publishDate">${publishedAt}</div><div class="imageContainer"><a href="${url}" target="_blank"><img class ="imageLazy" src=${urlToImage} /></a></div>`;
          }
        );
      elementId.innerHTML = returnHtml;
  }
}