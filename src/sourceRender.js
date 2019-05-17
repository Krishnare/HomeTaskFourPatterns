import intilizerClass from './SourceFetchService';

export default class NewssourceSelectRender {
    static renderHtml(data) {
      intilizerClass.run();
    const sourceSelectBox = document.getElementById("newsSource");
    data.sources.map(({ id }, index) => {
      const selectOptions = document.createElement("option");
      selectOptions[index] += selectOptions.text = id;
      sourceSelectBox.appendChild(selectOptions);
    });
  }
}