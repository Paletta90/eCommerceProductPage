import React, { useContext } from "react";

import DataShoesComponent from "../../../store/datashoes-comp";
import Description from "./Description";
import AddCart from "./AddCart";

import classes from "./DescriptionShoes.module.css";

const DescriptionShoes = (props) => {
  const ctxDataShoes = useContext(DataShoesComponent);

  return (
    <section className={classes.descriptionShoes}>
      <Description infoShoes={ctxDataShoes.data} />
      <AddCart />
    </section>
  );
};

export default DescriptionShoes;
