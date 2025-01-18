import React from "react";

export default function Card(props) {
  return (
    <div
      className="card"
      style={{ width: "100%", backgroundColor: "black" }}
    >
      <img
        src={props.src}
        className="card-img"
        alt="..."
      />
    </div>
  )
}