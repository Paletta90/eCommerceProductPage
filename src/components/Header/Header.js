import React from "react";

import Logo from "../UI/Logo";
import Navbar from "./Navbar";
import IconCart from "./IconCart";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <Navbar />
        <Logo />
      </div>
      <div>
        <IconCart showCart={props.showCart} />
      </div>
    </header>
  );
};

export default Header;
