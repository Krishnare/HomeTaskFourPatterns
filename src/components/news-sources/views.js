export default class NewssourceView {
  static NewssourceSelectBox(data) {
    const sourceSelectBox = document.getElementById("newsSource");
    data.sources.map(({ id }, index) => {
      const selectOptions = document.createElement("option");
      selectOptions[index] += selectOptions.text = id;
      sourceSelectBox.appendChild(selectOptions);
    });
  }
}
