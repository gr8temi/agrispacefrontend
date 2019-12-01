import React from "react";
// This import css styles for this component
import "./styles.css";
function Card({ key, image, title, tagline, Link }) {
  return (
    <div key={key} data-testid="card-id" className="card shadow col-md-3 p-0 ml-2">
      <div className="card-top d-flex justify-content-center align-items-center">
        <img src={image} className="img-fluid" alt="signup" />
      </div>
      <div className="card-body d-flex flex-column align-items-center">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-center">{tagline}</p>
        <div className="position-absolute card-button">
          {Link ? <button className="btn btn-agric">{title}</button> : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
