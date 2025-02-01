export class Row {
  constructor(className = "row") {
    this.openingTag = `<div class="${className}">`;
    this.closingTag = `</div>`;
    this.innerHTML = "";
  }

  addColumn(column) {
    this.innerHTML += column.toString();
  }

  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
