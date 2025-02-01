import { Row } from "../utils/Row.js";
import { Column } from "../utils/Column.js";
import { Container } from "../utils/Container.js";


// did some reading and realized that it could be a function instead of a class and just loaded it normally.
export function indexController() {
  const container = new Container("container");
  const logoRow = new Row("row mt-4");
  logoRow.addColumn(new Column("", "col-8"));
  logoRow.addColumn(
    new Column(`
        <div class="row">
          <div class="col-3">
            <div class="card" style="width: 100%; background-color: black;">
              <img src="img/bFFLogo.jpg" alt="..." style="width: 140%">
            </div>
          </div>
          <div class="col-9 d-flex align-items-center">
            <div style="color: white; font-size: 125%;">BLACK FOREST</div>
          </div>
        </div>`, "col-2 d-flex align-items-start"
    )
  );
  logoRow.addColumn(
    new Column(`
        <div class="card" style="width: 100%; background-color: black;">
          <img src="img/dallE3Logo.jpg" alt="..." style="width: 58%">
        </div>`, "col-2 d-flex align-items-end"
    )
  );
  container.addRow(logoRow);


  const descriptionRow = new Row("row");

  descriptionRow.addColumn(new Column(`
        <div class="row mt-5"></div>
        <div class="row mt-5">
          <p class="display-4 fw-bold" style="color: #fff78a">Recipe Deconstructor</p>
        </div>
        <div class="row mt-5">
          <h1 class="display-3" style="color: rgb(238, 238, 238)">Separate dishes into their ingredients</h1>
        </div>
        <div class="row mt-4">
          <div class="col-4 d-flex justify-content-end ms-3">
            <h4 style="color:rgba(204, 98, 98, 0.925)">Try here!</h4>
          </div>
          <div class="col-4">
            <a href="blackForestApi.html" class="btn btn-sm btn-outline-info fw-bold">BF Flux</a>
            <a href="openAiApi.html" class="btn btn-sm btn-outline-info fw-bold">Dall-E-3</a>
          </div>
        </div>`, "col-8"));

  descriptionRow.addColumn(new Column(`
        <div class="card"
          style="width: 100%; background-color: black; ">
          <img src="img/bfbsrecipe.jpg" class="card-img"
            alt="...">
        </div>
        
        <div class="card"
          style="width: 100%; background-color: black;">
          <img src="img/bfbsingredients.jpg"
            class="card-img" alt="...">
        </div>
        <div class="card"
        style="width: 100%; background-color: black;">
          <img src="img/bfcsrecipe.jpg" class="card-img"
            alt="...">
        </div>
        <div class="card"
        style="width: 100%; background-color: black;">
          <img src="img/bfcsingredients.jpg" class="card-img"
            alt="...">
        </div>
        `, "col-2"));
  descriptionRow.addColumn(new Column(`<div class="card"
      style="width: 100%; background-color: black;">
      <img src="img/openaibsrecipe.jpg" class="card-img"
        alt="...">
        </div>
        <div class="card"
          style="width: 100%; background-color: black;">
          <img src="img/openaibsingredients.jpg"
            class="card-img" alt="...">
        </div>
        <div class="card"
          style="width: 100%; background-color: black;">
          <img src="img/openaicsrecipe.jpg" class="card-img"
            alt="...">
        </div>
        <div class="card"
          style="width: 100%; background-color: black;">
          <img src="img/openaicsingredients.jpg"
            class="card-img" alt="...">
        </div>
        `, "col-2"));

  container.addRow(descriptionRow);

  document.body.innerHTML += container;

}

window.indexController = indexController;