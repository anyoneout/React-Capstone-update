import React from "react";
import { Link } from "react-router";

export function Nav() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="d-flex justify-content-evenly align-items-end" >
              <Link to="/" style={{ fontSize: "13px" }}
                className="link-underline-opacity-0 link-underline text-info">
                Home
              </Link>
              <Link to="/BfPage" style={{ fontSize: "13px" }}
                className="link-underline-opacity-0 link-underline text-info">Black Forest
              </Link>
              <Link to="/OaPage"
                style={{ fontSize: "13px" }}
                className="link-underline-opacity-0 link-underline text-info">Dall-E-3
              </Link>
              <Link to="/About" style={{ fontSize: "13px" }}
                className="link-underline-opacity-0 link-underline text-info">
                About
              </Link>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  )
}
