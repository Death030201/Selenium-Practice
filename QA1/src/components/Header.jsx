// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-green-600 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link to="/">GREENKART</Link>
      </div>
      <div className="space-x-4">
        <Link to="/top-deals" className="hover:underline">Top Deals</Link>
        <Link to="/flight" className="hover:underline">Flight Booking</Link>
        <Link to="/cart" className="hover:underline">🛒 Cart</Link>
      </div>
    </div>
  );
};

export default Header;