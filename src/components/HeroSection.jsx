import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ title }) => {
  return (
    <section className="pt-[98px] md:pt-[108px] lg:pt-[137px] relative">
      <div
        className="p-[150px_0px_120px] lg:p-[230px_0px_150px] breadcrumb-bg relative bg-[center_center] bg-cover bg-no-repeat z-[1]"
        style={{
          backgroundImage: `url("https://suxnix-dev.myshopify.com/cdn/shop/files/video_bg_fc243aec-f2b9-451a-87dd-84dc29514d83.jpg?v=1736693977")`,
        }}
      >
        <div className="container max-w-[1320px] px-3 mx-auto">
          <div className="flex items-center justify-center w-full">
            <div className="space-y-6 text-center">
              <h1 className="text-5xl text-white sm:text-6xl">{title}</h1>
              <div className="flex items-start justify-center gap-4 text-xl text-white sm:gap-3">
                <Link to="/">Home</Link>
                {"|"}
                <Link to="#">{title}</Link>
              </div>
            </div>
          </div>
        </div>
        {/* shapes */}
        <div className="absolute left-0 bottom-[-12%] z-[3]">
          <img
            src="https://suxnix-dev.myshopify.com/cdn/shop/files/video_shape01.png?v=1736696105"
            alt="shape 1"
          />
        </div>
        <div className="absolute right-0 bottom-[-7%] z-[3]">
          <img
            src="https://suxnix-dev.myshopify.com/cdn/shop/files/video_shape02.png?v=1736696110"
            alt="shape 2"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
