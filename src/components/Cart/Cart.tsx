import { CartItem } from "./CartItem/CartItem";
import { RootState } from "../../redux/store";
import { toggleCart } from "../../redux/actions";
import { connect, ConnectedProps } from "react-redux";
import "./Cart.scss";

const CartComponent = ({ showCart, toggleCart }: CartProps) => {
  return (
    <div className="cart" style={{ display: showCart ? "flex" : "none" }}>
      <span className="cart__close" onClick={() => toggleCart(false)}>
        X
      </span>

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

const mapStateToProps = (state: RootState) => ({
  list: state.cart.list,
  totalPrice: state.cart.totalPrice,
  showCart: state.cart.showCart,
});
const mapDispatchToProps = {
  toggleCart,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type CartProps = ConnectedProps<typeof connector>;

export const Cart = connector(CartComponent);
