import React, { useState } from "react";

import ListNavbar from "./ListNavbar";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const [backdrop, setBackdrop] = useState();
  const [display, setDisplay] = useState("");
  const getDropdown = () => {
    setDisplay("block");
    setBackdrop(classes.backdrop);
  };
  const removeDropdown = () => {
    setDisplay("none");
    setBackdrop("");
  };

  return (
    <nav>
      <ListNavbar display={classes.displayLaptop} />
      {/* Hamburger menu */}
      <div className={`${classes.dropdown} ${classes.displaySmartphone}`}>
        <img
          className={classes.dropbtn}
          src="./img/icon-menu.svg"
          alt=""
          onClick={getDropdown}
        />
        <div>
          <div className={backdrop} onClick={removeDropdown} />
          <ListNavbar
            removeDropdown={display}
            removeDropdownbyIcon={removeDropdown}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
