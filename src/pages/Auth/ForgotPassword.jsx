import React from "react";
import styled from "styled-components";
import Navbar from "@/components/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const ForgotPassword = () => {
  const handleForgotPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Navbar />
      <main className="min-h-screen">
        <div>
          <HeroSection title={"Login"} />
        </div>
        <div>
          <section className="py-[120px] lg:py-[130px]">
            <div className="max-w-[1320px] mx-auto px-4 container ">
              <div className="flex items-center justify-center">
                <div className="md:w-[66%] lg:w-[50%] mx-auto p-[30px_20px] sm:p-[25px_50px] border border-[#e1e1e1] space-y-5 rounded-md bg-[#f5f5f5]">
                  <div className="">
                    <h1 className="text-2xl font-semibold sm:text-4xl">
                      Forgot Password?
                    </h1>
                  </div>
                  <div className="">
                    <p className="text-base font-normal">
                      Lost your password? Please enter your email address. You
                      will receive a link to create a new password via email.
                    </p>
                  </div>
                  <form
                    action=""
                    className="space-y-6"
                    onSubmit={handleForgotPassword}
                  >
                    <div className="">
                      <Label
                        htmlFor="email"
                        className="block text-lg font-semibold text-suxnix-text_heading"
                      >
                        Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        className="block w-full !px-4 !py-6 mt-1 border border-gray-300 rounded-[5px] shadow-sm focus:ring-suxnix-text_primary sm:text-lg text-black"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div>
                      <Button
                        type="submit"
                        className="w-full px-4 text-lg font-semibold text-white transition-colors duration-300 rounded-full py-7 bg-suxnix-text_secondary hover:bg-suxnix-text_primary"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
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

export default ForgotPassword;
