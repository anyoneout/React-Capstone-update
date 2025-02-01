import React from "react";
import { Link } from "react-router";

export function Nav() {
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="row align-items-end d-flex">
              <div className="col-2 d-flex justify-content-end align-items-end">
                <Link to="/" style={{ fontSize: "13px" }}
                  className="link-underline-opacity-0 link-underline text-info">
                  Home</Link>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-end">
                <Link to="/BfPage" style={{ fontSize: "13px" }}
                  className="link-underline-opacity-0 link-underline text-info">Black Forest</Link>
              </div>
              <div
                className="col-3 d-flex justify-content-center align-items-end">
                <Link to="/OaPage"
                  style={{ fontSize: "13px" }}
                  className="link-underline-opacity-0 link-underline text-info">Dall-E-3
                </Link>
              </div>
              <div className="col-3 d-flex justify-content-start align-items-end">
                <Link to="/About" style={{ fontSize: "13px" }}
                  className="link-underline-opacity-0 link-underline text-info">
                  About</Link>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  )
}
