import React from "react";
import { Link } from "react-router-dom";

const ShopButton = ({ size = "md", path, title }) => {
  const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-10 py-4 text-base",
    lg: "px-14 py-5 text-lg",
  };

  return (
    <Link
      to={`/shop/${path}`}
      className={`
        relative inline-block overflow-hidden
        rounded-full border-[3px] border-white
        bg-[#faa432] text-white font-bold
        capitalize cursor-pointer select-none
        leading-[1.4] whitespace-nowrap
        transition-all duration-500
        z-10 group w-full text-center
        ${sizes[size]}
      `}
    >
      {/* replaces ::before */}
      <span
        className="
          absolute -z-10
          w-[200%] h-[200%]
          rounded-full
          bg-[#0d9b4d]
          left-1/2 top-[110%]
          -translate-x-1/2
          transition-all duration-500
          group-hover:top-[-40%]
        "
      />
      {title}
    </Link>
  );
};

export default ShopButton;
