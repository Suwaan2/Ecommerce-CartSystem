import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CartPage.module.css";
import {addToCart, clearCart, removeCart} from "../features/cartSlice"

function CartPage() {
 

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch()


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Cart Items</h2>
      <div className={styles.items}>
        {cartItems &&
          cartItems.map((item) => (
            <div key={item.id} className={styles.itemCard}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.itemImage}
              />
              <p className={styles.itemText}>Price:{item.price}</p>
              <p className={styles.itemText}>Total Quantity: {item.quantity}</p>
        <button onClick={() => dispatch(removeCart(item.id))}>❌</button>
        <button onClick={()=>dispatch(addToCart(item))}>✚</button>
        <button onClick={()=>dispatch(removeCart(item.id))}>―</button>

            </div>
          ))}
      </div>
      <div className={styles.totals}>
        <p className={styles.totalQuantity}>Total Items: {totalQuantity}</p>
        <p className={styles.totalPrice}>
          Total Price: ${totalPrice.toFixed(2)}
        </p>
        <button className={styles.button} onClick={()=>dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
  );
}

export default CartPage;
