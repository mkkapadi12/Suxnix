import ShopButton from "@/helper/ShopButton";
import React from "react";

const ProductHightlight = () => {
  return (
    <div className="">
      <section className="py-14 lg:py-16">
        <div className="container mx-auto md:max-w-[1200px] lg:px-0 px-4 space-y-10 sm:space-y-6">
          {/* 1 highlight */}
          <div className="">
            <div className="grid items-center justify-between grid-cols-1 gap-5 md:grid-cols-2">
              {/* Image */}
              <div className="relative flex items-center justify-center w-full mb-8 features-products before:left-0 sm:before:left-[38%] p-4">
                <div>
                  <img
                    src="https://suxnix-dev.myshopify.com/cdn/shop/files/features_product01.png?v=1736660782"
                    alt="hightlight 1"
                    className="h-[350px] lg:h-[345px] mb-10"
                  />
                </div>
              </div>
              {/* Content */}
              <div>
                <div className="md:w-[80%] md:text-start text-center mx-auto md:mx-0">
                  <div className="mb-16">
                    <h1 className="text-5xl">Seriour Mass</h1>
                  </div>
                  <div className="space-y-6 md:space-y-4">
                    <p className="font-medium text-suxnix-text_heading">
                      High-strength, 5000IU
                    </p>
                    <p>
                      Vitamin D3 supplements are commonly recommended for people
                      at risk for vitamin D deficiency. Low vitamin D levels
                      cause depression, fatigue, and muscle weakness.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-10 md:justify-start">
                      <div>
                        <ShopButton size={"md"} />
                      </div>
                      <div className="flex items-end gap-4">
                        <h1 className="text-3xl font-bold">$89.99</h1>
                        <h2 className="text-xl font-semibold text-suxnix-text_primary">
                          $117.99
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 highlight */}
          <div className="">
            <div className="grid items-center justify-between grid-cols-1 gap-5 md:grid-cols-2">
              {/* Image */}
              <div className="oreder-1 sm:order-2 relative flex items-center justify-center w-full mb-8 features-products before:left-0 lg:before:left-[38%] p-4">
                <div>
                  <img
                    src="https://suxnix-dev.myshopify.com/cdn/shop/files/features_product02.png?v=1736661941"
                    alt="hightlight 1"
                    className="h-[350px] lg:h-[345px] mb-10"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="flex justify-end oreder-2 sm:order-1">
                <div className="md:w-[80%] md:text-start text-center mx-auto md:mx-0">
                  <div className="mb-16">
                    <h1 className="text-5xl">Protein Whey</h1>
                  </div>
                  <div className="space-y-6 md:space-y-4">
                    <p className="font-medium text-suxnix-text_heading">
                      High-strength, 4000IU
                    </p>
                    <p>
                      Vitamin D3 supplements are commonly recommended for people
                      at risk for vitamin D deficiency. Low vitamin D levels
                      cause depression, fatigue, and muscle weakness.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-10 md:justify-start">
                      <div>
                        <ShopButton size={"md"} />
                      </div>
                      <div className="flex items-end gap-4">
                        <h1 className="text-3xl font-bold">$59.99</h1>
                        <h2 className="text-xl font-semibold text-suxnix-text_primary">
                          $79.99
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 highlight */}
          <div className="">
            <div className="grid items-center justify-between grid-cols-1 gap-5 md:grid-cols-2">
              {/* Image */}
              <div className="relative flex items-center justify-center w-full mb-8 features-products before:left-0 sm:before:left-[38%] p-4">
                <div>
                  <img
                    src="https://suxnix-dev.myshopify.com/cdn/shop/files/features_product03.png?v=1736661972"
                    alt="hightlight 1"
                    className="h-[350px] lg:h-[345px] mb-10"
                  />
                </div>
              </div>
              {/* Content */}
              <div>
                <div className="md:w-[80%] md:text-start text-center mx-auto md:mx-0">
                  <div className="mb-16">
                    <h1 className="text-5xl transition-all duration-500 cursor-pointer hover:text-suxnix-text_primary">
                      Max Mass 3xl
                    </h1>
                  </div>
                  <div className="space-y-6 md:space-y-4">
                    <p className="font-medium text-suxnix-text_heading">
                      High-strength, 4000IU
                    </p>
                    <p>
                      Vitamin D3 supplements are commonly recommended for people
                      at risk for vitamin D deficiency. Low vitamin D levels
                      cause depression, fatigue, and muscle weakness.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-10 md:justify-start">
                      <div>
                        <ShopButton size={"md"} />
                      </div>
                      <div className="flex items-end gap-4">
                        <h1 className="text-3xl font-bold">$69.99</h1>
                        <h2 className="text-xl font-semibold text-suxnix-text_primary">
                          $89.99
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductHightlight;
