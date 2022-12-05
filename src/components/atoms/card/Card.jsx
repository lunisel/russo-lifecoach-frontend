import React from "react";
import BtnRounded from "../btn-rounded/BtnRounded";
import "./styles.css";

const Card = ({ title, subtitle, description, color }) => {
  return (
    <div className={`single-card-container ${color}`}>
      <h2 className="card-title">{title}</h2>
      <p className="card-subtitle">{subtitle}</p>
      <p className="card-description">{description}</p>
      <div className="btn-container">
        <BtnRounded
          text="Richiedi subito un colloquio invormativo"
          color={"bg-white"}
          width="w-100"
        />
      </div>
    </div>
  );
};

export default Card;
