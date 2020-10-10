import React from "react";
import "./card.styles.scss";

const Card = ({ title }) => (
  <div className="card">
    <h1>{title}</h1>
    <p> This is card component </p>
  </div>
);

export default Card;
