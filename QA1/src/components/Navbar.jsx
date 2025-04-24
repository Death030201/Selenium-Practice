import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold"><Link to="/">GreenKart</Link></h1>
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;