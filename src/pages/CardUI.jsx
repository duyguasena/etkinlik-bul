import React from "react";

import "../style/About.css";

function Card(props) {
  return (
    <div className="card">
      <div className="overflow">
        <img src={props.imgsrc} alt="" className="card-img" />
      </div>
      <div className="card-body ">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.text}</p>
        <button type="button" class="btn btn-primary">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;
