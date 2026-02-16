import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductItem from "@/components/ProductItem";
import { products, sortOptions } from "@/Data/shoppageData";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import React from "react";
import styled from "styled-components";

const Shop = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Wrapper>
      <Navbar />
      <main className="min-h-screen">
        <div>
          <HeroSection title={"Our Shop"} />
        </div>
        <div>
          <section className="py-[120px]">
            <div className="max-w-full sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1320px] mx-auto px-4 container">
              <div className="flex flex-col items-center justify-center gap-10 sm:gap-0 md:flex-row md:items-start md:justify-start">
                {/* products  */}
                <div className="w-full md:w-[66.67%] xl:w-[75%] sm:px-3 space-y-10">
                  {/* top-wrap */}
                  <div className="p-[15px_22px] border-[#f1f1f1] border-2 border-solid">
                    <div className="flex items-center justify-between">
                      <div className="w-[50%]">
                        <p>Showing 1-8 of 8 results</p>
                      </div>
                      <div className="w-[50%] flex items-center justify-end">
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <MenuButton className="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
                            Sort
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="ml-1 -mr-1 text-gray-400 size-5 shrink-0 group-hover:text-gray-500"
                            />
                          </MenuButton>

                          <MenuItems
                            transition
                            className="absolute right-0 z-10 w-40 mt-2 transition origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                          >
                            <div className="py-1">
                              {sortOptions.map((option) => (
                                <MenuItem key={option.name}>
                                  <a
                                    href={option.href}
                                    className={classNames(
                                      option.current
                                        ? "font-medium text-gray-900"
                                        : "text-gray-500",
                                      "block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden",
                                    )}
                                  >
                                    {option.name}
                                  </a>
                                </MenuItem>
                              ))}
                            </div>
                          </MenuItems>
                        </Menu>
                      </div>
                    </div>
                  </div>
                  {/* main prodducts */}
                  <div>
                    <div className="grid grid-cols-1 gap-y-[50px] sm:grid-cols-2 xl:grid-cols-3">
                      {products.map((item) => {
                        return <ProductItem key={item.id} {...item} />;
                      })}
                    </div>
                  </div>
                </div>
                {/* filters  */}
                <div className="w-full md:w-[33.33%] xl:w-[25%] sm:px-3">
                  <Filters />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .breadcrumb-bg:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: #090909;
    opacity: 0.85;
    z-index: -1;
  }
  .breadcrumb-bg:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-image: url("https://suxnix-dev.myshopify.com/cdn/shop/t/2/assets/testimonial_bottom_shape.png");
    width: 100%;
    height: 36px;
    background-repeat: repeat;
    background-position: center;
    z-index: 1;
  }
`;

export default Shop;
