import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div className="border p-4 rounded shadow text-center">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-green-700 font-bold">${product.price}</p>
      <button
        className="mt-2 bg-green-500 text-white px-4 py-1 rounded"
        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;