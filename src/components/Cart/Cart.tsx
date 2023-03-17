import { CartItem } from "./CartItem/CartItem";
import "./Cart.scss";

export const Cart = () => {
  return (
    <div className="cart">
      <span className="cart__close">X</span>

      <div className="cart__header">
        <h3 className="header__title">Shopping cart</h3>
        <div>
          <span className="header__items">{"1 items"}</span>
          <span className="header__clear">Clear cart</span>
        </div>
      </div>

      <ul className="cart__list">
        <CartItem />
        <CartItem />
      </ul>

      <div className="cart__bottom">
        <div>
          <span className="cart__subtotal">Subtotal ({1} items)</span>
          <span className="cart__price">${600}</span>
        </div>
        <button className="cart__btn">Buy cart</button>
      </div>
    </div>
  );
};
