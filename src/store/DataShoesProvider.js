import { useState } from "react";
import DataShoesComponent from "./datashoes-comp";

const DataShoesProvider = (props) => {
  const [dataShoes, setDataShoes] = useState({
    smallTitle: "sneaker company",
    title: "fall limited edition sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole.They'll withstand everything the weather can offer",
    price: "150.00",
    discount: "50",
    item: 0,
  });

  return (
    <DataShoesComponent.Provider
      value={{
        data: dataShoes,
        updateItem: (nItem) => {
          setDataShoes({ ...dataShoes, item: nItem });
        },
      }}
    >
      {props.children}
    </DataShoesComponent.Provider>
  );
};

export default DataShoesProvider;
