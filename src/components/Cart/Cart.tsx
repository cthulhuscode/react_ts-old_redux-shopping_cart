import { CartItem } from "./CartItem/CartItem";
import { RootState } from "../../redux/store";
import {
  changeProductQty,
  clearCart,
  removeCartItem,
  toggleCart,
} from "../../redux/actions";
import { connect, ConnectedProps } from "react-redux";
import "./Cart.scss";
import { CartItem as ICartItem } from "../../interfaces";

const CartComponent = ({
  showCart,
  list,
  totalPrice,
  itemsCount,
  toggleCart,
  changeProductQty,
  clearCart,
  removeCartItem,
}: CartProps) => {
  return (
    <div className="cart" style={{ display: showCart ? "flex" : "none" }}>
      <span className="cart__close" onClick={() => toggleCart(false)}>
        X
      </span>

      <div className="cart__header">
        <h3 className="header__title">Shopping cart</h3>
        <div>
          <span className="header__items">{itemsCount} items</span>
          <span className="header__clear" onClick={() => clearCart()}>
            Clear cart
          </span>
        </div>
      </div>

      <ul className="cart__list">
        {list.map((item: ICartItem) => (
          <CartItem
            key={item.product.id}
            item={item}
            changeProductQty={changeProductQty}
            removeCartItem={removeCartItem}
          />
        ))}
      </ul>

      <div className="cart__bottom">
        <div>
          <span className="cart__subtotal">Subtotal ({itemsCount} items)</span>
          <span className="cart__price">${totalPrice.toFixed(2)}</span>
        </div>
        <button className="cart__btn">Buy cart</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  list: state.cart["list"],
  totalPrice: state.cart["totalPrice"],
  showCart: state.cart["showCart"],
  itemsCount: state.cart.itemsCount,
});

const mapDispatchToProps = {
  toggleCart,
  changeProductQty,
  clearCart,
  removeCartItem,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type CartProps = ConnectedProps<typeof connector>;

export const Cart = connector(CartComponent);
