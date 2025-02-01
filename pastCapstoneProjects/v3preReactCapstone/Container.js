
export class Container {
  constructor(className = "container") {
    this.openingTag = `<div class="${className}">`;
    this.closingTag = `</div>`;
    this.innerHTML = "";
  }

  addRow(row) {
    this.innerHTML += row.toString();
  }

  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
