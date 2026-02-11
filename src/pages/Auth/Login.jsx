import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Login = () => {
  return (
    <Wrapper>
      <Navbar />
      <main className="min-h-screen">
        <div>
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
                    <h1 className="text-5xl text-white sm:text-6xl">Login</h1>
                    <div className="flex items-start gap-4 text-xl text-white sm:gap-3 justify-evenly">
                      <Link to="/">Home</Link>
                      {"|"}
                      <Link>Login</Link>
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
        </div>
        <div>
          <section className="py-[120px] lg:py-[130px]">
            <div className="max-w-[1320px] mx-auto px-4 container ">
              <div className="flex items-center justify-center">
                <div className="md:w-[66%] lg:w-[50%] mx-auto p-[30px_20px] sm:p-[25px_50px] border border-[#e1e1e1] space-y-5 rounded-md bg-[#f5f5f5]">
                  <div className="">
                    <h1 className="text-2xl font-semibold sm:text-4xl">
                      Welcome Back!
                    </h1>
                  </div>
                  <div className="">
                    <p className="text-base font-normal">
                      Hey there! Ready to log in? Just enter your username and
                      password below and you'll be back in action in no time.
                      Let's go!
                    </p>
                  </div>
                  <form action="" className="space-y-6">
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
                      />
                    </div>
                    <div className="">
                      <Label
                        htmlFor="password"
                        className="block text-lg font-semibold text-suxnix-text_heading"
                      >
                        Password
                      </Label>
                      <Input
                        type="password"
                        id="password"
                        className="block w-full !px-4 !py-6 mt-1 border border-gray-300 rounded-[5px] shadow-sm focus:ring-suxnix-text_primary sm:text-lg text-black"
                        placeholder="Password"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Field orientation="horizontal" className="w-auto">
                        <Checkbox
                          id="terms-checkbox"
                          name="terms-checkbox"
                          className="bg-white border border-[#e1e1e1]"
                        />
                        <Label
                          htmlFor="terms-checkbox"
                          className="text-base !text-suxnix-text_heading"
                        >
                          Remember me
                        </Label>
                      </Field>
                      <div className="">
                        <Link
                          to="/"
                          className="text-base font-normal underline text-suxnix-text_primary"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Button
                        type="submit"
                        className="w-full px-4 text-lg font-semibold text-white transition-colors duration-300 rounded-full py-7 bg-suxnix-text_secondary hover:bg-suxnix-text_primary"
                      >
                        Sign In
                      </Button>
                    </div>
                  </form>
                  <div className="text-base font-normal text-center">
                    <p>
                      Don't have an account?
                      <Link
                        to="/signup"
                        className="pl-1 underline text-suxnix-text_primary"
                      >
                        Sign Up
                      </Link>
                    </p>
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

export default Login;
