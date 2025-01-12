import React from "react";


export function About() {
  return (
    <>
      <div className="container" style={{ minHeight: "15vh" }}></div>
      <div className="container mt-5" style={{ minHeight: "45vh" }}>
        <div className="row d-flex justify-content-center">
          <div className="card"
            style={{ width: "17rem", backgroundColor: "black" }}>
            <img src="../img/aboutImage.jpg"
              className="rounded-circle card-img-top pt-3" alt="" />
            <div className="card-body">
              <div
                className="card-title display-6 d-flex justify-content-center text-light">
                Chris Ali</div>
              <div
                className="card-text text-light justify-content-center d-flex">
                Student</div>
              <div
                className="card-text justify-content-center d-flex">
                <a href="mailto: chrisdafur@gmail.com"
                  className="text-info">chrisdafur@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4" style={{ minHeight: "25vh" }}>
      </div>
    </>
  )
}