import AmountCartToggle from "@/components/AmountCartToggle";
import { useCartContext } from "@/Context/Cartcontext";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCounter = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, price } = product;
  const [amount, setAmount] = useState(1);

  const setDecrese = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrese = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Quantity Counter */}
      <AmountCartToggle
        amount={amount}
        setDecrese={setDecrese}
        setIncrese={setIncrese}
      />

      {/* Add to Cart Button */}
      <Link to="/cart">
        <button
          onClick={() => addToCart(id, stock, amount, product)}
          className="px-6 py-3 text-base font-medium text-white transition-all duration-300 rounded-md bg-suxnix-text_secondary hover:bg-suxnix-text_primary"
        >
          ADD TO CART
        </button>
      </Link>
    </div>
  );
};

export default ProductCounter;
