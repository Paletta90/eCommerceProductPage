import React, { useState } from "react";

import Cart from "../../UI/Cart";
import classes from "./ImagesShoes.module.css";

const ImagesShoes = (props) => {
  const [index, setIndex] = useState(0);
  const imagesShoes = [
    "./img/image-product-1.jpg",
    "./img/image-product-2.jpg",
    "./img/image-product-3.jpg",
    "./img/image-product-4.jpg",
  ];
  const imagesShoesThumb = [
    "./img/image-product-1-thumbnail.jpg",
    "./img/image-product-2-thumbnail.jpg",
    "./img/image-product-3-thumbnail.jpg",
    "./img/image-product-4-thumbnail.jpg",
  ];
  const plus = () => {
    setIndex((prevIndex) => {
      if (prevIndex === imagesShoes.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };
  const minus = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return 0;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const clickThumb = (e) => {
    setIndex(e.target.getAttribute("index"));
  };
  const listThumb = [];

  imagesShoesThumb.forEach((url, index) => {
    listThumb.push(
      <img src={url} key={index} index={index} onClick={clickThumb} />
    );
  });
  console.log(index);
  return (
    <section className={classes.imagesShoes}>
      <img src={imagesShoes[index]} alt="" />
      <div className={classes.iconPreviousNext}>
        <img src="./img/icon-previous.svg" alt="" onClick={minus} />
        <img src="./img/icon-next.svg" alt="" onClick={plus} />
      </div>
      <div className={classes.imagesShoesThumb}>{listThumb}</div>
      {props.cartIsClicked && <Cart className={classes.d_none} />}
    </section>
  );
};

export default ImagesShoes;
