import React, { useState, useContext } from "react";

import classes from "./AddCart.module.css";
import DataShoesComponent from "../../../store/datashoes-comp";

const AddCart = (props) => {
  const ctxGetNumItems = useContext(DataShoesComponent).updateItem;

  let [numItems, setNumItems] = useState(0);

  const plusItem = () => {
    setNumItems(numItems + 1);
    ctxGetNumItems(numItems + 1);
  };
  const minusItem = () => {
    if (numItems <= 0) {
      setNumItems(0);
      ctxGetNumItems(0);
    } else {
      setNumItems(numItems - 1);
      ctxGetNumItems(numItems - 1);
    }
  };

  return (
    <div className={classes.addCart}>
      <div className={classes.plus_minus}>
        <img
          src="./img/icon-minus.svg"
          alt=""
          onClick={(event) => {
            minusItem();
          }}
        />
        <span>{numItems}</span>
        <img
          src="./img/icon-plus.svg"
          alt=""
          onClick={(event) => {
            plusItem();
          }}
        />
      </div>
      <button className={classes.button}>
        <img src="./img/icon-cart.svg" alt="" />
        <span className="f-small">Add to cart</span>
      </button>
    </div>
  );
};

export default AddCart;
