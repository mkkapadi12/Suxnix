import React from "react";
import { ICONS } from "@/icons/icons";
const AmountCartToggle = ({ amount, setDecrese, setIncrese }) => {
  return (
    <div className="flex items-center justify-start gap-2">
      <div className="flex gap-2 px-2 rounded-lg amount-toggle bg-bg text-text">
        <button onClick={() => setDecrese()}>
          <ICONS.MINUS />
        </button>
        <div className="amount-style text-text">{amount}</div>
        <button onClick={() => setIncrese()}>
          <ICONS.PLUS />
        </button>
      </div>
    </div>
  );
};

export default AmountCartToggle;
