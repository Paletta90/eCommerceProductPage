import { useContext } from "react";
import { capitalizeLetters } from "../..";

import DataShoesComponent from "../../store/datashoes-comp";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const ctxDataShoes = useContext(DataShoesComponent).data;
  return (
    <div className={`${classes.cart} ${props.className}`}>
      <h4 className="f-small">Cart</h4>
      <div
        className={`${classes.content_cart} ${
          ctxDataShoes.item === 0 ? classes.cartEmpty : ""
        }`}
      >
        {ctxDataShoes.item !== 0 ? (
          <div>
            <div className={classes.inner_cart}>
              {/* Image product */}
              <div>
                <img
                  src="./img/image-product-1-thumbnail.jpg"
                  alt=""
                  width="50px"
                />
              </div>
              {/* Description product */}
              <div>
                <div>
                  <p className="f-small">
                    {capitalizeLetters(ctxDataShoes.title)}
                  </p>
                </div>
                <div>
                  <span className="f-small">
                    {ctxDataShoes.price} x <span>{ctxDataShoes.item}</span>
                  </span>
                  <span>${ctxDataShoes.price * ctxDataShoes.item}</span>
                </div>
              </div>
              {/* Icon delete */}
              <div>
                <img src="./img/icon-delete.svg" alt="" width="10px" />
              </div>
            </div>
            {/* Button checkout */}
            <button className={classes.button}>
              <span className="f-small">Checkout</span>
            </button>
          </div>
        ) : (
          <p className="f-small">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
