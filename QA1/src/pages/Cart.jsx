import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center border p-4 rounded">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm">Qty: {item.quantity}</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-bold">₹{item.price * item.quantity}</p>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right text-xl font-bold mt-4">Total: ₹{getTotal()}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
