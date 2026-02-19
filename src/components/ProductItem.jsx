import React from "react";
import ShopButton from "@/helper/ShopButton";
import { ICONS } from "@/icons/icons";
import { Link, NavLink } from "react-router-dom";

const ProductItem = (item) => {
  return (
    <div className="px-2 sm:px-4">
      <div className="p-[25px] sm:p-[31px] shadow-[0_15px_26px_#adb9ca2b] space-y-5">
        <NavLink to={`/shop/product/${item.id}`}>
          {/* img */}
          <div className="flex items-center justify-center w-full">
            <img src={item.img} alt={item.id} className="min-h-[190px]" />
          </div>
        </NavLink>
        {/* content */}
        <div className="flex flex-col items-start justify-between space-y-7">
          <div className="space-y-3">
            <span className="text-base font-medium">{item.category}</span>
            <h1 className="text-xl">{item.title}</h1>
            <h2 className="text-xl font-semibold">
              <span className="mr-1 capitalize">Price :</span>
              {item.price}
            </h2>
          </div>
          {/* shop btn */}
          <div className="flex items-center justify-center gap-4">
            <div className="px-3 py-3 text-white rounded-full bg-suxnix-text_secondary">
              <ICONS.CART size={20} />
            </div>
            <div className="flex items-center justify-center">
              <ShopButton
                size={"sm"}
                path={`product/${item.id}`}
                title={"Buy Now"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
