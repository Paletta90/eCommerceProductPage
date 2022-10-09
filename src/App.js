import React, { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import DataShoesProvider from "./store/DataShoesProvider";

function App() {
  const [shownCart, setShownCart] = useState(false);
  const showCart = () => {
    setShownCart(!shownCart);
  };
  return (
    <DataShoesProvider>
      <Header showCart={showCart} />
      <Main cartIsClicked={shownCart} />
    </DataShoesProvider>
  );
}

export default App;
