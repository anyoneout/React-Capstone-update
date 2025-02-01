
export class Column {
  constructor(content, className = "col") {
    this.openingTag = `<div class="${className}">`;
    this.closingTag = `</div>`;
    this.innerHTML = content;
  }

  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
