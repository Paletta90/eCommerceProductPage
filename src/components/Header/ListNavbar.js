import React from "react";

import classes from "./ListNavbar.module.css";

const ListNavbar = (props) => {
  return (
    <ul
      className={`${classes.dropdown_content} f-small ${props.display}`}
      style={{ display: props.removeDropdown }}
    >
      <li>
        <img
          className={classes.d_noneLaptop}
          src="./img/icon-close.svg"
          alt=""
          onClick={props.removeDropdownbyIcon}
        />
      </li>
      <li>
        <a href="">Collections</a>
      </li>
      <li>
        <a href="">Men</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
      <li>
        <a href="">Women</a>
      </li>
      <li>
        <a href="">About</a>
      </li>
    </ul>
  );
};

export default ListNavbar;
