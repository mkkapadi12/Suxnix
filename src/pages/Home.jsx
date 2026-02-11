import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  benefitsData,
  blogPosts,
  brandData,
  faqData,
  featuresData,
  pricingPlans,
  statsData,
  testimonials,
} from "@/Data/homepageData";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import styled from "styled-components";
import ShopButton from "@/helper/ShopButton";
import ProductHightlight from "@/components/ProductHightlight";
import ProductGrid from "@/components/ProductGrid";
import { Link } from "react-router-dom";
import { ICONS } from "@/icons/icons";
import { Clock, MoveLeft, Watch } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";

const Home = () => {
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));

  return (
    <Wrapper className="min-h-screen">
      <Navbar />
      {/* hero section */}
      <main className="">
        {/* Hero Section */}
        <div className="">
          <section className="pt-[150px] lg:pt-[170px] relative">
            <div className="container mx-auto">
              {/* banner title */}
              <div className=" sm:mb-0 mb-[55px] flex flex-col items-center justify-center sm:max-w-xl lg:max-w-[869px] mx-auto text-center space-y-5  lg:space-y-7">
                <p className="font-semibold uppercase text-suxnix-text_primary">
                  .. Increased Energy With SUXNIX ..
                </p>
                <h2 className="!leading-tight text-suxnix-text_heading text-5xl sm:text-6xl lg:text-7xl">
                  Mix Protein Provided Way To Growth
                </h2>
                <div className="relative sm:top-[30px] lg:top-[32px] z-[9]">
                  <ShopButton size={"p-[17px_52px]"} />
                </div>
              </div>
              <div className="flex w-full p-4 py-0 text-center sm:relative sm:block sm:px-0">
                <img
                  src={
                    "https://suxnix-dev.myshopify.com/cdn/shop/files/banner_img01_4dfc6924-a7d3-4e69-abc4-4e1199127900.png?v=1736613086&width=800"
                  }
                  alt=""
                  className="sm:absolute sm:bottom-[-15px] left-0 sm:max-w-[340px] lg:max-w-[550px] mx-auto right-0"
                />
                <img
                  src={
                    "https://suxnix-dev.myshopify.com/cdn/shop/files/banner_round_bg_b113813b-23c3-450b-846b-d4d4d9541856.png?v=1736613043&width=1200"
                  }
                  alt=""
                  className="hidden mx-auto sm:block"
                />
              </div>
            </div>
            <div className="absolute top-[24%] left-0 sm:block hidden">
              <img
                src="https://suxnix-dev.myshopify.com/cdn/shop/files/banner_shape01.png?v=1735621648&width=200"
                alt=""
              />
            </div>
            <div className="absolute top-[18%] right-0 z-[-1]">
              <img
                src="https://suxnix-dev.myshopify.com/cdn/shop/files/banner_shape02.png?v=1736613175&width=200"
                alt=""
              />
            </div>
            <div className="absolute lg:block hidden left-[40px] bottom-[-15px]">
              <img
                src="https://suxnix-dev.myshopify.com/cdn/shop/files/banner_shape03.png?v=1736613185&width=200"
                alt=""
              />
            </div>
            <div className="absolute lg:block hidden right-[40px] bottom-[-15px]">
              <img
                src="https://suxnix-dev.myshopify.com/cdn/shop/files/banner_shape04.png?v=1736613185&width=200"
                alt=""
              />
            </div>
          </section>
        </div>
        {/* Brand Carousel */}
        <div>
          <section className="p-[95px_0px_100px] lg:p-[110px_0px_120px]">
            <div className="container mx-auto space-y-10">
              {/* text */}
              <div className="text-center sm:p-0 p-[0px_75px]">
                <p className="text-base sm:text-lg font-medium tracking-[.095em] uppercase text-suxnix-text_heading">
                  Perfect Brand is Featured on
                </p>
              </div>
              {/* company carousel */}
              <Carousel
                plugins={[plugin.current]}
                className="w-full mx-auto max-w-[1300px] xl:px-0 px-3"
                onMouseEnter={plugin.current.stop}
                // onMouseLeave={plugin.current.reset}
                options={{ loop: false }}
              >
                <CarouselContent>
                  {brandData.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-[45%] sm:basis-[25%] lg:basis-[20%] pl-4"
                    >
                      <div className="p-1">
                        <Card className="transition-all border-none shadow-none cursor-pointer hover:-translate-y-2">
                          <CardContent className="flex items-center justify-center w-full p-3 sm:w-full lg:w-full">
                            <img src={item.img} alt="brand" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </section>
        </div>
        {/* Features Section */}
        <div>
          <section
            className="features-bg relative bg-cover bg-[center] p-[97px_0px] m-[37px_0px_44px]"
            style={{
              backgroundImage: `url("https://suxnix-dev.myshopify.com/cdn/shop/files/features_bg_8c0db956-8dd7-4361-930d-ee274ba05131.jpg?v=1736613695")`,
            }}
          >
            <div className="container mx-auto lg:max-w-[1320px] lg:px-0 px-6">
              <div className="grid items-center justify-center grid-cols-1 gap-6 lg:gap-4 lg:grid-cols-2">
                <div className="grid order-2 gap-10 sm:grid-cols-2 lg:order-1">
                  {featuresData.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="space-y-5 text-center sm:text-start"
                      >
                        <div className="flex items-center justify-center sm:justify-start">
                          <item.icon
                            size={44}
                            className="text-suxnix-text_primary"
                          />
                        </div>
                        <h1 className="text-xl text-suxnix-text_white">
                          {item.title}
                        </h1>
                        <p className="text-base text-suxnix-text_white">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-center order-1 lg:justify-end lg:order-2">
                  <img
                    src="https://suxnix-dev.myshopify.com/cdn/shop/files/features_img_00ec7c4b-95e1-4661-b180-7c2bd4db7ebb.png?v=1736613975"
                    alt="features 1"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Product Highlight */}
        <ProductHightlight />

        {/* Product Card */}
        <ProductGrid />

        {/* Formula Video Section */}
        <div>
          <section
            className="video-bg relative z-[1] bg-cover bg-[center] p-[100px_0px] sm:m-[37px_0px_44px] min-h-[600px] lg:min-h-[700px] flex items-center justify-center"
            style={{
              backgroundImage: `url("https://suxnix-dev.myshopify.com/cdn/shop/files/video_bg_8112a5ce-2dd0-45f9-ac62-fd4d1b132944.jpg?v=1737135174")`,
            }}
          >
            <div className="absolute bg-[#090909] opacity-[0.8] z-[-1] top-0 left-0 w-full h-full"></div>
            <div className="container mx-auto lg:max-w-[1320px] lg:px-4 sm:px-6 px-3">
              <div className="flex items-center justify-center">
                <Link
                  to="https://www.youtube.com/watch?v=HQfF5XRVXjU"
                  className="w-[132px] h-[132px] flex items-center justify-center ripple-white rounded-full"
                >
                  <ICONS.PLAYCIRCLE className="text-suxnix-text_secondary z-[999]" />
                </Link>
              </div>
            </div>
          </section>
        </div>
        {/* state Section */}
        <div>
          <section className="py-[100px] lg:py-[100px]">
            <div className="container max-w-[1320px] mx-auto px-3 sm:px-6 lg:px-0">
              <div className="flex flex-wrap items-center justify-center w-full grid-cols-1 gap-8 px-3 py-4 md:flex-row space-y-7 sm:space-y-0 sm:px-10 lg:justify-between lg:items-start sm:gap-10 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {statsData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-center gap-2 sm:gap-6 lg:justify-start"
                    >
                      <div className="relative w-[70px] h-[70px]">
                        <span
                          className="absolute top-[50%] right-[50%] font-semibold leading-[1] text-suxnix-text_heading"
                          style={{
                            transform: "translate(50%, -50%)",
                          }}
                        >
                          {item.percentage}%
                        </span>
                        <canvas className="p-2 w-[70px] h-[70px] flex items-center justify-center bg-suxnix-text_primary rounded-full"></canvas>
                        {/* <div className="w-[50px] h-[50px] bg-white z-[999] top-[10%] right-[10%] rounded-full absolute ">hell</div> */}
                      </div>
                      <div className="space-y-1 lg:space-y-2">
                        <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                        <p className="text-base">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        {/* Ingredients Section */}
        <div>
          <section className="relative p-[97px_0px] m-[37px_0px_44px]">
            <div className="container mx-auto lg:max-w-[1320px] lg:px-4 px-4">
              <div className="flex flex-col items-center justify-center gap-10 lg:gap-4 lg:flex-row">
                {/* image */}
                <div className="ingredients-img flex items-center justify-center lg:justify-start w-[75%] sm:w-[50%] sm:mx-[60px] lg:mr-[60px] lg:ml-0 lg:w-[41%] relative">
                  <img
                    src="https://suxnix-dev.myshopify.com/cdn/shop/files/ingredients_img_935aff4a-681c-4796-b32f-2c04b1334309.png?v=1737135850"
                    alt="Ingredients"
                    className="lg:mr-[80px]"
                  />
                  <img
                    src="https://suxnix-dev.myshopify.com/cdn/shop/files/ingredients_shape_3fd21533-6d88-4ac8-af2f-415082b53a2c.png?v=1737135925"
                    alt=""
                    className="absolute max-w-[180px] sm:max-w-full bottom-[20px] left-[-55px] sm:left-[-125px] z-[-9]"
                  />
                </div>
                {/* Content */}
                <div className="lg:w-[58%] space-y-10 lg:space-y-8">
                  <div className="space-y-3 text-center lg:text-start">
                    <p className="font-semibold uppercase text-suxnix-text_primary">
                      .. Increased Energy With SUXNIX ..
                    </p>
                    <h2
                      className={`!leading-tight text-suxnix-text_heading text-4xl sm:text-5xl`}
                    >
                      Suxnix Ingredients
                    </h2>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {benefitsData.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="space-y-5 text-center lg:text-start"
                        >
                          <div className="flex items-center justify-center lg:justify-start">
                            <img src={item.image} alt={item.id} />
                          </div>
                          <h1
                            className={`text-xl relative inline-block pl-[11px] before:left-0 before:content-[""] before:w-[3px] before:h-[18px] before:bg-suxnix-text_primary before:absolute before:top-[6px]`}
                          >
                            {item.title}
                          </h1>
                          <p className="text-base">{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Formula Section */}
        <div>
          <section className="py-16">
            <div className="container max-w-[1320px] mx-auto px-4">
              <div className="md:px-[79px]">
                <div className="flex flex-col items-center gap-0 lg:flex-row">
                  {/* content */}
                  <div className="order-2 lg:order-1 flex-[0_0_auto] lg:w-[50%] px-2">
                    <div className="mt-[60px] space-y-4">
                      <p className="text-base font-medium tracking-widest uppercase text-suxnix-text_subtitle">
                        .. Suxnix Formula ..
                      </p>
                      <h2 className="text-5xl font-semibold">
                        Why We Chose This Formula
                      </h2>
                      <div>
                        <Link className="tg-btn">Know More</Link>
                      </div>
                    </div>
                  </div>
                  {/* image */}
                  <div className="order-1 lg:order-2 sm:w-[60%] lg:w-[50%] flex-[0_0_auto] px-2">
                    <img
                      src="https://suxnix-dev.myshopify.com/cdn/shop/files/formula_img.png?v=1737136420"
                      alt="formula img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Packages Section */}
        <div>
          <section className="py-16 bg-[#F5F5F5]">
            <div className="container max-w-[1320px] mx-auto px-4 space-y-10">
              {/* title */}
              <div className=" sm:mb-0 mb-[55px] flex flex-col items-center justify-center sm:max-w-xl lg:max-w-[869px] mx-auto text-center space-y-5  lg:space-y-5">
                <p className="font-semibold uppercase text-suxnix-text_primary tracking-[.095em]">
                  .. Suxnix Plans ..
                </p>
                <h2 className="!leading-tight text-suxnix-text_heading text-5xl sm:text-6xl lg:text-5xl">
                  SUPPLEMENT PACKAGES
                </h2>
              </div>
              {/* Plans */}
              <div className="lg:p-[0px_50px]">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2">
                  {pricingPlans.map((item) => {
                    return (
                      <div key={item.id} className="flex flex-col gap-3">
                        <div className="text-lg text-center !text-white bg-suxnix-text_primary rounded-md p-2">
                          {item.highlight ? (
                            <h1 className="text-white">{item.highlightText}</h1>
                          ) : (
                            <h2 className="opacity-0">No Value</h2>
                          )}
                        </div>
                        <Card
                          className="px-4 text-center transition-all duration-500 bg-white border-2 border-white py-7 hover:border-suxnix-text_primary"
                          key={item.id}
                        >
                          <div className="flex flex-col items-center justify-center gap-8">
                            <div className="space-y-1">
                              <h3 className="text-2xl tracking-wider">
                                {item.title}
                              </h3>
                              <h1 className="text-4xl font-semibold">
                                {item.brand}
                              </h1>
                              <p className="text-lg font-medium text-suxnix-text_heading">
                                {item.subtitle}
                              </p>
                            </div>
                            <div className="">
                              <div className="w-[80%] lg:max-w-[80%] mx-auto">
                                <img
                                  src={item.image}
                                  alt={item.id}
                                  className="w-full h-full"
                                />
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-start justify-center gap-2 font-medium text-start">
                                <h1 className="text-5xl lg:text-5xl">
                                  ${item.pricePerBottle}
                                </h1>
                                <p className="text-base">
                                  Per <br /> Bottle
                                </p>
                              </div>
                              <p className="text-lg font-semibold text-suxnix-text_body">
                                (${item.totalPrice} TOTAL)
                              </p>
                              <h1 className="text-3xl text-semibold text-suxnix-text_primary">
                                save {item.savePercent}%
                              </h1>
                              <p className="text-xl font-semibold tracking-wide text-suxnix-text_primary">
                                + {item.shipping}
                              </p>
                            </div>
                            <div className="flex w-full">
                              <Link className="transition-all w-full md:w-[85%] mx-auto duration-300 gap-0 p-[8px_10px] md:p-[7px_12px] !text-white border-2 rounded-md bg-suxnix-text_primary hover:bg-suxnix-text_white hover:!text-suxnix-text_primary border-suxnix-text_primary">
                                <p className="text-2xl font-semibold uppercase lg:text-2xl">
                                  Buy Now
                                </p>
                                <p className="text-[12px] lg:text-[12px] uppercase text-medium">
                                  365 day full money back guranteed
                                </p>
                              </Link>
                            </div>
                          </div>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Testinials Section */}
        <div>
          <section
            className="testimonial-bg relative z-[1] bg-cover bg-[center] p-[100px_0px] sm:m-[37px_0px_44px] flex items-center justify-center"
            style={{
              backgroundImage: `url("https://suxnix-dev.myshopify.com/cdn/shop/files/testimonial_bg.jpg?v=1739554820")`,
            }}
          >
            <div className="absolute bg-[#090909] opacity-[0.8] z-[-1] top-0 left-0 w-full h-full"></div>
            <div className="container mx-auto lg:max-w-[1320px] lg:px-4 sm:px-6 px-3">
              <div className="flex">
                <Carousel className="w-full sm:max-w-[66%] mx-auto">
                  <CarouselContent>
                    {testimonials.map((item) => (
                      <CarouselItem key={item.id}>
                        <div className="p-1">
                          <Card className="border-none">
                            <CardContent className="flex flex-col items-center justify-center p-3 space-y-8 md:p-6">
                              <div className="flex items-center gap-1">
                                {Array.from({ length: item.rating }).map(
                                  (_, index) => (
                                    <ICONS.STAR
                                      key={index}
                                      className="text-suxnix-text_primary"
                                    />
                                  ),
                                )}
                              </div>
                              <div>
                                <p className="italic font-medium text-center text-white text-xl/8">
                                  {item.description}
                                </p>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-center">
                                  <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-[80px] h-[80px] rounded-full"
                                  />
                                </div>
                                <h3 className="text-lg font-semibold text-white">
                                  {item.name}
                                </h3>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="sm:block hidden absolute w-12 h-12 border-none rounded-none slick-arrow z-[2] before:bg-suxnix-text_secondary before:left-[-25px]" />
                  <CarouselNext className="sm:block hidden absolute w-12 h-12 border-none rounded-none before:bg-suxnix-text_secondary slick-arrow before:right-[-25px]" />
                </Carousel>
              </div>
            </div>
          </section>
        </div>

        {/* Latest News Section */}
        <div>
          <section className="py-[100px]">
            <div className="container mx-auto max-w-[540px] md:max-w-[1320px] md:px-7 lg:px-3">
              <div className="flex flex-col items-start justify-between md:flex-row md:gap-8 lg:gap-2">
                {/* latest news */}
                <div className="md:w-[50%] px-3 md:mb-0 mb-[100px]">
                  <div className="lg:mr-[110px] space-y-10">
                    {/* title */}
                    <div className="space-y-3 text-start">
                      <p className="text-base font-medium tracking-[.095em] uppercase text-suxnix-text_primary">
                        .. Suxnix News ..
                      </p>
                      <h2 className="!leading-tight text-suxnix-text_heading text-[40px] md:text-5xl">
                        Latest News
                      </h2>
                    </div>
                    {/* content */}
                    <div className="space-y-12">
                      {blogPosts.map((post) => {
                        return (
                          <div key={post.id}>
                            <div className="flex flex-col gap-4 sm:flex-row">
                              {/* image */}
                              <div className="w-[50%] lg:w-[50%]">
                                <Link to={"/blog/" + post.id}>
                                  <img
                                    src={post.image}
                                    alt={post.id}
                                    className="w-full h-full rounded-lg"
                                  />
                                </Link>
                              </div>
                              <div className="w-[100%] space-y-4 sm:space-y-7">
                                <div className="flex justify-between gap-1">
                                  <p className="text-base font-medium transition-all duration-300 cursor-pointer text-suxnix-text_heading hover:text-suxnix-text_primary">
                                    {post.category}
                                  </p>
                                  <p className="text-base">
                                    <ICONS.CLOCK
                                      className="inline-block mr-1"
                                      size={16}
                                    />
                                    {post.date}
                                  </p>
                                </div>
                                <div className="">
                                  <h1 className="text-xl transition-all duration-300 cursor-pointer hover:text-suxnix-text_primary">
                                    {post.title.slice(0, 26) + "..."}
                                  </h1>
                                </div>
                                <div className="flex items-center justify-between w-full gap-1">
                                  <div className="font-normal text-suxnix-text_heading">
                                    <p>
                                      Posted by -{" "}
                                      <Link to="/">
                                        <span className="cursor-pointer text-suxnix-text_primary">
                                          {post.author}
                                        </span>
                                      </Link>
                                    </p>
                                  </div>
                                  <div className="flex gap-2">
                                    <p>
                                      <ICONS.MAIL
                                        className="inline-block mr-1"
                                        size={16}
                                      />
                                      {post.comments}
                                    </p>
                                    <p>
                                      <ICONS.VIEWS
                                        className="inline-block mr-1"
                                        size={16}
                                      />
                                      {post.views}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* faqs */}
                <div className="md:w-[50%] px-3">
                  <div className="lg:ml-[100px] space-y-8">
                    {/* title */}
                    <div className="space-y-3 text-start">
                      <p className="text-base font-medium tracking-[.095em] uppercase text-suxnix-text_primary">
                        .. Common Questions ..
                      </p>
                      <h2 className="!leading-tight text-suxnix-text_heading text-[40px] md:text-5xl">
                        Frequently Asked Questions
                      </h2>
                    </div>
                    {/* faqs */}
                    <div className="">
                      <Accordion
                        type="single"
                        collapsible
                        defaultValue="ingredients"
                        className="md:max-w-[25rem] lg:max-w-[35rem] mx-auto"
                      >
                        {faqData.map((faq) => {
                          return (
                            <AccordionItem
                              value={faq.value}
                              key={faq.id}
                              className="px-4 py-3 border-none rounded-md"
                            >
                              <AccordionTrigger>
                                <h1 className="text-lg font-medium text-suxnix-text_heading">
                                  <span className="mr-2 text-suxnix-text_primary">
                                    0{faq.id}.
                                  </span>{" "}
                                  {faq.question}
                                </h1>
                              </AccordionTrigger>
                              <AccordionContent className="text-base/7">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          );
                        })}
                      </Accordion>
                    </div>
                  </div>
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

const Wrapper = styled.section`
  .features-bg:before {
    content: "";
    position: absolute;
    left: 0;
    top: -41px;
    width: 100%;
    height: 41px;
    background-image: url("https://suxnix-dev.myshopify.com/cdn/shop/t/2/assets/features_shape01.png");
    background-repeat: repeat-x;
    background-position: center;
  }

  .features-bg:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -50px;
    width: 100%;
    height: 50px;
    background-image: url("https://suxnix-dev.myshopify.com/cdn/shop/t/2/assets/features_shape02.png");
    background-repeat: repeat-x;
    background-position: center;
  }

  .features-products:before {
    content: "";
    position: absolute;
    /* left: 38%; */
    top: 50%;
    background-image: url("https://suxnix-dev.myshopify.com/cdn/shop/t/2/assets/features_product_dots.png");
    width: 706px;
    height: 706px;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: contain;
    transform: translate(-50%, -50%);
  }

  .ingredients-img:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 5px;
    width: 355px;
    height: 27px;
    background: var(--tg-dark);
    filter: blur(30px);
    border-radius: 99px;
    z-index: -1;
  }

  .tg-btn {
    user-select: none;
    border: medium none;
    color: var(--tg-white);
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1;
    margin-bottom: 0;
    padding: 18px 30px;
    text-align: center;
    text-transform: uppercase;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
    border-radius: 25px;
    position: relative;
    background-image: linear-gradient(to right, #94be26, #65b021, #94be26);
    box-shadow: 0 8px 16px #94be2666;
    transition: all 0.4s linear;
    background-size: 200% auto;
  }

  .tg-btn:hover {
    background-position: right center;
    color: var(--tg-white);
    box-shadow: none;
  }

  .video-bg:before {
    content: "";
    position: absolute;
    left: 0;
    top: -6px;
    background-image: url("https://suxnix-dev.myshopify.com/cdn/shop/t/2/assets/video_top_mask.png");
    width: 100%;
    height: 46px;
    background-repeat: repeat;
    background-position: center;
    z-index: 1;
  }

  .video-bg:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: url("https://suxnix-dev.myshopify.com/cdn/shop/t/2/assets/video_bottom_mask.png");
    width: 100%;
    height: 36px;
    background-repeat: repeat;
    background-position: center;
    z-index: 1;
  }

  @keyframes ripple-white {
    0% {
      -webkit-box-shadow:
        0 0 0 0 rgba(13, 155, 77, 0.3),
        0 0 0 10px rgba(13, 155, 77, 0.3),
        0 0 0 20px rgba(13, 155, 77, 0.3);
      box-shadow:
        0 0 0 0 rgba(13, 155, 77, 0.3),
        0 0 0 10px rgba(13, 155, 77, 0.3),
        0 0 0 20px rgba(13, 155, 77, 0.3);
    }
    100% {
      -webkit-box-shadow:
        0 0 0 10px rgba(13, 155, 77, 0.3),
        0 0 0 20px rgba(13, 155, 77, 0.3),
        0 0 0 30px rgba(255, 255, 255, 0);
      box-shadow:
        0 0 0 10px rgba(13, 155, 77, 0.3),
        0 0 0 20px rgba(13, 155, 77, 0.3),
        0 0 0 30px rgba(255, 255, 255, 0);
    }
  }

  .ripple-white {
    animation: ripple-white 1s linear infinite;
  }

  .testimonial-bg:before {
    content: "";
    position: absolute;
    left: 0;
    top: -10px;
    background-image: url("https://suxnix-dev.myshopify.com/cdn/shop/t/2/assets/testimonial_top_shape.png");
    width: 100%;
    height: 33px;
    background-repeat: repeat;
    background-position: center;
  }

  .testimonial-bg:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -9px;
    background-image: url("https://suxnix-dev.myshopify.com/cdn/shop/t/2/assets/testimonial_bottom_shape.png");
    width: 100%;
    height: 37px;
    background-repeat: repeat;
    background-position: center;
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

export default Home;
