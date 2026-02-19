import React, { useState } from "react";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { popularTag, productCategories, products } from "@/Data/shoppageData";
import { ICONS } from "@/icons/icons";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const Filters = () => {
  const [value, setValue] = useState([10, 40]);

  const latestProduct = products.filter((item) => {
    return item.category === "Fat Burners";
  });
  return (
    <aside className="sm:ml-[20px]">
      <div className="space-y-10">
        <div className="space-y-7">
          <h4 className="text-lg border-b pb-[20px] border-[#c8c8c8]">
            Filter by Price
          </h4>
          {/* Price Range Slider */}
          <div className="grid w-full max-w-xs gap-6 mx-auto">
            <Slider
              id="slider-demo-temperature"
              value={value}
              onValueChange={setValue}
              min={0.0}
              max={977.0}
              step={1}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-2">
                <Label
                  htmlFor="slider-demo-temperature"
                  className="text-base font-medium text-suxnix-text_heading"
                >
                  Price :
                </Label>
                <span className="text-base font-medium text-suxnix-text_heading">
                  {value.join(" - ")}
                </span>
              </div>
              <div>
                <Button className="px-5 py-4 text-base font-medium text-white uppercase border-none rounded-none bg-suxnix-text_secondary">
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-7">
          <h4 className="text-lg border-b pb-[20px] border-[#c8c8c8]">
            Categories
          </h4>
          <div>
            <ul className="ml-4 space-y-4 !list-disc">
              {productCategories.map((cat) => {
                return (
                  <Link
                    key={cat.id}
                    className="flex justify-between w-full hover:!text-suxnix-text_secondary transition-colors duration-300"
                  >
                    <li className="w-full text-sm font-semibold uppercase">
                      {cat.title}
                    </li>
                    <ICONS.CHEVRONSRIGHT size={18} />
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg border-b pb-[20px] border-[#c8c8c8]">
            Latest Products
          </h4>
          <div className="flex flex-col items-start gap-5 justify-normal">
            {latestProduct.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="w-[85px] h-[85px] p-[10px] bg-[#f3f3f3] flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.id}
                      className="w-auto h-full"
                    />
                  </div>
                  <div className="space-y-1">
                    {/* ratings */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={`${
                            i < 5
                              ? "fill-[#ffb400] text-[#ffb400]"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <h1 className="text-lg">{item.title}</h1>
                    <p className="text-base font-medium text-suxnix-text_secondary">
                      Price {item.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg border-b pb-[20px] border-[#c8c8c8]">
            Product tags
          </h4>
          <div className="flex flex-wrap gap-3">
            {popularTag.slice(0, 5).map((item) => {
              return (
                <Button
                  key={item.id}
                  className="px-5 py-3 text-[12px] font-semibold uppercase border-none rounded-none shadow-none text-suxnix-text_heading hover:text-white hover:bg-suxnix-text_secondary bg-[#f5f5f5]"
                >
                  {item.tag}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
