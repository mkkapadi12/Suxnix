import React, { useEffect, useMemo, useState } from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Products } from "@/Data/products";
import {
  additionalInformation,
  productImages,
  suxnixBasics,
} from "@/Data/shoppageData";
import ProductCounter from "@/helper/ProductCounter";
import { ICONS } from "@/icons/icons";
import { Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const ShopDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  // Find product only once
  const singleProduct = useMemo(() => {
    return Products.find((item) => item.id === id);
  }, [id]);

  useEffect(() => {
    if (singleProduct) {
      setProduct(singleProduct);
      setActiveImage(singleProduct.image[0]); // default main image
      window.scrollTo(0, 0);
    }
  }, [singleProduct]);

  return (
    <Wrapper>
      <Navbar />
      <main className="min-h-screen">
        <div>
          <HeroSection title={"Shop Details"} />
        </div>
        <div>
          <section className="">
            {product ? (
              <div className="max-w-full sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1320px] mx-auto px-4 container">
                <div className="flex flex-col items-start justify-center md:flex-row py-[120px] md:gap-0 gap-8">
                  {/* products images */}
                  <div className="md:w-[50%] sm:px-3 w-full mx-auto">
                    <div className="flex flex-col items-start justify-center gap-5">
                      {/* main image */}
                      <div className="flex items-center justify-center bg-[#f7f7f7] overflow-hidden">
                        <img
                          src={activeImage?.url}
                          alt="product"
                          className="w-full h-auto transition-all duration-500 ease-in-out scale-100 hover:scale-105"
                        />
                      </div>

                      {/* 4 images */}
                      <div className="flex justify-start w-full gap-4 md:justify-center">
                        {product.image.map((img) => {
                          const isActive = activeImage?.id === img.id;

                          return (
                            <div
                              key={img.id}
                              onClick={() => setActiveImage(img)}
                              className={`w-[120px] h-auto py-1 px-4 sm:px-0 cursor-pointer bg-[#f7f7f7] border-2 transition-all duration-300  ${isActive ? "border-suxnix-text_secondary" : "border-transparent"} hover:border-suxnix-text_secondary`}
                            >
                              <img
                                src={img.url}
                                alt={img.id}
                                className="w-full transition-opacity duration-300"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* product details */}
                  <div className="md:w-[50%] sm:px-3 space-y-7 w-full">
                    <div className="">
                      <h1 className="text-[26px] font-medium sm:text-4xl">
                        {product?.name}
                      </h1>
                    </div>
                    <div className="flex flex-wrap items-center justify-start gap-2">
                      <div className="pr-3 border-r-2">
                        <p className="font-medium text-[#696868] text-base">
                          <span className="font-normal text-suxnix-text_body">
                            Vendor :{" "}
                          </span>
                          {product?.vendor}
                        </p>
                      </div>
                      <div className="flex items-center justify-start gap-0 pr-3 border-r-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${
                              i < product?.rating
                                ? "fill-orange-400 text-orange-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-base font-medium text-gray-500">
                          ({product?.rating})
                        </span>
                      </div>
                      <p className="text-base font-medium ">
                        Id : {product.id}
                      </p>
                    </div>
                    <div className="">
                      <h1 className="flex items-center gap-2 text-4xl">
                        {product?.currency} {product?.price}
                        <span className="text-sm uppercase text-suxnix-text_secondary">
                          - {product.stockStatus}
                        </span>
                      </h1>
                    </div>
                    <div className="text-base">
                      <p>{product?.description} </p>
                    </div>
                    <div className="">
                      <ul className="space-y-1">
                        <li>
                          <ICONS.RIGHT
                            size={14}
                            className="inline mr-2 text-white rounded-full bg-suxnix-text_secondary"
                          />
                          <span className="font-medium">Title: </span>
                          Default Title
                        </li>
                        <li>
                          <ICONS.RIGHT
                            size={14}
                            className="inline mr-2 text-white rounded-full bg-suxnix-text_secondary"
                          />
                          <span className="font-medium">Vendor: </span>
                          Fashion Shofy Ecommerce
                        </li>
                        <li>
                          <ICONS.RIGHT
                            size={14}
                            className="inline mr-2 text-white rounded-full bg-suxnix-text_secondary"
                          />
                          <span className="font-medium">Type: </span>
                          Supplement
                        </li>
                      </ul>
                    </div>
                    <div className="">
                      <ProductCounter product={product} />
                    </div>
                    <hr className="!my-7" />
                    <div className="flex flex-col items-start justify-start gap-2">
                      <div className="space-x-2">
                        <span>Tags:</span>
                        {product?.tags?.map((tag, index) => {
                          return (
                            <Button
                              key={index}
                              className="border px-3 !py-1 transition-colors duration-300 bg-transparent rounded-md shadow-none text-suxnix-text_body hover:text-white hover:bg-suxnix-text_secondary"
                            >
                              {tag}
                            </Button>
                          );
                        })}
                      </div>
                      <div className="space-x-2">
                        <span>Categories:</span>
                        {product?.categories?.map((cat, index) => {
                          return (
                            <Button
                              key={index}
                              className="border px-3 !py-1 transition-colors duration-300 bg-transparent rounded-md shadow-none text-suxnix-text_body hover:text-white hover:bg-suxnix-text_secondary"
                            >
                              {cat}
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product Summary */}
                <div className="pb-[120px]">
                  <Tabs defaultValue="description" className="space-y-10">
                    <TabsList
                      variant="line"
                      className="items-center justify-start w-full gap-10 border-b-2"
                    >
                      <TabsTrigger
                        value="description"
                        className="text-base font-semibold text-[#696868]"
                      >
                        Description
                      </TabsTrigger>
                      <TabsTrigger
                        value="add-info"
                        className="text-base font-semibold text-[#696868]"
                      >
                        Additional Information
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="description" className="space-y-7">
                      <div className="space-y-4">
                        <h1 className="text-[22px] font-medium">
                          The true strength of Suxnix :
                        </h1>
                        <p>
                          Whey Protein Isolates (WPIs) are the purest form of
                          whey protein that currently exists. WPIs are costly to
                          use, but rate among the best proteins that money can
                          buy. That’s why they’re the first ingredient you read
                          on the Gold Standard 100% Whey™ label. By using WPI as
                          the primary ingredient along with premium
                          ultra-filtered whey protein concentrate (WPC), we’re
                          able to pack 24 grams of protein into every serving to
                          support your muscle building needs after training.
                          ON’attention to detail also extends to mixability.
                          This superior quality powder has been instantized to
                          mix easliy using a shaker cup or just a glass and
                          spoon. There’s no doubt that this is the standard by
                          which all other whey proteins are measured.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h1 className="text-[22px] font-medium">
                          Suxnix the basics :
                        </h1>
                        <ul className="ml-4 space-y-3 list-disc">
                          {suxnixBasics.map((item, index) => {
                            return (
                              <li key={index} className="text-base">
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="add-info">
                      <div className="space-y-4">
                        <div>
                          <h1 className="text-[22px] font-medium">
                            Additional Information
                          </h1>
                        </div>
                        <Table>
                          <TableBody className="">
                            {additionalInformation.map((item, i) => {
                              return (
                                <TableRow key={i} className="border">
                                  <TableCell className="w-[20%] font-semibold text-suxnix-text_heading border p-[13px_25px]">
                                    {item.label}
                                  </TableCell>

                                  <TableCell className="text-left p-[13px_25px] italic font-medium border">
                                    {item.value}
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Related Products */}
                <div>
                  <h1 className="text-4xl">Related Products</h1>
                  <ProductGrid />
                </div>
              </div>
            ) : (
              <div className="pt-10 text-center">
                <Link
                  to={"/shop"}
                  className="text-lg font-medium hover:underline text-suxnix-text_primary"
                >
                  Product Not Found
                </Link>
              </div>
            )}
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

  .slick-arrow:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 55px;
    height: 55px;
    opacity: 0.3;
    border-radius: 50%;
    transition: all 0.3s ease-out 0s;
    z-index: -1;
  }
`;

export default ShopDetails;
