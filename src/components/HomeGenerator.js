import React from "react";
import { Link } from "react-router";

export function HomeGenerator() {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-8"></div>
          <div className="col-2 d-flex align-items-start">
            <div className="row">
              <div className="col-3">
                <div className="card"
                  style={{ width: "100%", backgroundColor: "black" }}
                >
                  <img src="../img/bFFLogo.jpg"
                    alt="..."
                    style={{ width: "140%" }}
                  />
                </div>
              </div>
              <div className="col-9 d-flex align-items-center">
                <div style={{ color: "white", fontSize: "125%" }}>
                  BLACK FOREST
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 d-flex align-items-end">
            <div
              className="card"
              style={{ width: "100%", backgroundColor: "black" }}
            >
              <img
                src="../img/dallE3Logo.jpg"
                alt="..."
                style={{ width: "58%" }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="row mt-5"></div>
            <div className="row mt-5">
              <p className="display-4 fw-bold" style={{ color: "#fff78a" }}>
                Recipe Deconstructor
              </p>
            </div>
            <div className="row mt-5">
              <h1 className="display-3" style={{ color: "rgb(238, 238, 238)" }}>
                Separate dishes into their ingredients
              </h1>
            </div>
            <div className="row mt-4">
              <div className="col-4 d-flex justify-content-end ms-3">
                <h4 style={{ color: "rgba(204, 98, 98, 0.925)" }}>Try here!</h4>
              </div>
              <div className="col-4">
                <Link
                  to="BfPage"
                  className="btn btn-sm btn-outline-info fw-bold"
                >
                  Black Forest
                </Link>
                <Link
                  to="OaPage"
                  className="btn btn-sm btn-outline-info fw-bold"
                >
                  Dall-E-3
                </Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div
              className="card"
              style={{ width: "100%", backgroundColor: "black" }}
            >
              <img
                src="../img/bfbsrecipe.jpg"
                className="card-img"
                alt="..."
              />
            </div>
            <div
              className="card"
              style={{ width: "100%", backgroundColor: "black" }}
            >
              <img
                src="../img/bfbsingredients.jpg"
                className="card-img"
                alt="..."
              />
            </div>
            <div
              className="card"
              style={{ width: "100%", backgroundColor: "black" }}
            >
              <img
                src="../img/bfcsrecipe.jpg"
                className="card-img"
                alt="..."
              />
            </div>
            <div
              className="card"
              style={{ width: "100%", backgroundColor: "black" }}
            >
              <img
                src="../img/bfcsingredients.jpg"
                className="card-img"
                alt="..."
              />
            </div>
          </div>
          <div className="col-2">
            <div
              className="card"
              style={{ width: "100%", backgroundColor: "black" }}
            >
              <img
                src="../img/openaibsrecipe.jpg"
                className="card-img"
                alt="..."
              />
            </div>
            <div
              className="card"
              style={{ width: "100%", backgroundColor: "black" }}
            >
              <img
                src="../img/openaibsingredients.jpg"
                className="card-img"
                alt="..."
              />
            </div>
            <div
              className="card"
              style={{ width: "100%", backgroundColor: "black" }}
            >
              <img
                src="../img/openaicsrecipe.jpg"
                className="card-img"
                alt="..."
              />
            </div>
            <div
              className="card"
              style={{ width: "100%", backgroundColor: "black" }}
            >
              <img
                src="../img/openaicsingredients.jpg"
                className="card-img"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
