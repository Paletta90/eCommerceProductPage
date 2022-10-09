import React, { useContext, useState } from "react";

import DataShoesComponent from "../../store/datashoes-comp";
import Cart from "../UI/Cart";
import classes from "./IconCart.module.css";

const IconCart = (props) => {
  let numItem = useContext(DataShoesComponent).data.item;
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={classes.icons}>
      <div
        className={classes.logo_cart}
        onClick={() => {
          props.showCart();
          setIsClicked(!isClicked);
        }}
      >
        {numItem > 0 && <div className={classes.circle}>{numItem}</div>}
        <img src="./img/icon-cart.svg" alt="" />
        {isClicked && <Cart className={classes.cartLaptop} />}
      </div>
      <img src="./img/image-avatar.png" alt="" />
    </div>
  );
};

export default IconCart;
