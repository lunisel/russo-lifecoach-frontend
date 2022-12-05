import React from "react";
import Card from "../../atoms/card/Card";
import "./styles.css";
import { data } from "./utils";

const CardSection = ({ history, vw }) => {
  return (
    <div className="card-section-big">
      <div
        className={
          vw > 700 ? "card-section-container" : "card-carousel-container"
        }
        id="percorsi"
      >
        {data.map((item) => (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
