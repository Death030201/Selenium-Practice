import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <div className="flex justify-between items-center border p-2">
      <div>
        <h4>{item.name}</h4>
        <p>${item.price} x {item.qty}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => dispatch({ type: 'INCREMENT_QTY', payload: item.id })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT_QTY', payload: item.id })}>-</button>
        <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;