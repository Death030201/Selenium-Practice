import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import productsData from "../products";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});
  const [search, setSearch] = useState("");

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleQuantityChange = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) + delta, 0),
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addToCart({ ...product, quantity });
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <input
        type="text"
        placeholder="Search for Vegetables and Fruits"
        className="border border-gray-400 p-2 w-full mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded-lg p-4 text-center shadow hover:shadow-lg transition-all">
            <img src={product.image} alt={product.name} className="w-28 h-28 mx-auto" />
            <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.weight}</p>
            <p className="mt-2 font-bold">₹{product.price}</p>

            <div className="flex justify-center items-center gap-2 mt-3">
              <button onClick={() => handleQuantityChange(product.id, -1)} className="px-2 bg-red-500 text-white rounded">-</button>
              <span>{quantities[product.id] || 0}</span>
              <button onClick={() => handleQuantityChange(product.id, 1)} className="px-2 bg-green-500 text-white rounded">+</button>
            </div>

            <button
              className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;