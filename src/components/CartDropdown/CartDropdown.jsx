import React from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = (state) => ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
