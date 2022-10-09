import React from "react";
import { capitalizeLetters } from "../../../index.js";
import classes from "./Description.module.css";

const Description = (props) => {
  const infoShoes = props.infoShoes;
  const descriptionWithCapitalizeLetters = capitalizeLetters(infoShoes.title);
  const newPrice =
    infoShoes.price - (infoShoes.price / 100) * infoShoes.discount;
  return (
    <div className={classes.description}>
      <h4 className="f-smallTitle">{infoShoes.smallTitle}</h4>
      <h1 className="f-bigTitle">{descriptionWithCapitalizeLetters}</h1>
      <p className="f-small">{infoShoes.description}</p>
      <div className={classes.price}>
        <div className={classes.price}>
          <p className="f-price">&#x24;{infoShoes.price}</p>
          <p className="f-smallTitle">{infoShoes.discount}&#x2105;</p>
        </div>
        <p className="f-smallPrice">&#x24;{newPrice}</p>
      </div>
    </div>
  );
};

export default Description;
