import React from "react";

import ImagesShoes from "./Sections/ImagesShoes";
import DescriptionShoes from "./Sections/DescriptionShoes";

import classes from "./Main.module.css";

const Main = (props) => {
  return (
    <main className={classes.main}>
      <ImagesShoes cartIsClicked={props.cartIsClicked} />
      <DescriptionShoes />
      <div></div>
    </main>
  );
};

export default Main;
