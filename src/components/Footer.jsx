import React from "react";
import styled from "styled-components";
import logo from "../assets/images/white_logo.png";
import { ICONS } from "@/icons/icons";
import { Link } from "react-router-dom";
import { aboutUsLinks, supportLinks } from "@/Data/homepageData";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="">
        {/* footer instagram */}
        <div className="relative z-[3] m-[0px_0px_95px]"></div>
        {/* footer top wrap */}
        <div className="footer-top-wrap p-[195px_0px_30px] relative z-[1] bg-[#0a0a0a]">
          <div className="container mx-auto md:max-w-[960px] lg:max-w-[1320px] px-4">
            <div className="flex flex-wrap justify-between gap-y-8 md:flex-row">
              {/* content */}
              <div className="w-[100%] sm:w-[50%] md:w-[33%] md:px-4 space-y-7">
                {/* logo */}
                <div className="w-[45%]">
                  <img src={logo} alt="logo" />
                </div>
                <div className="md:w-[90%] lg:w-[77%]">
                  <p className="opacity-[.7] text-white text-base/7">
                    Making beauty especially relating complot especial common
                    questions tend to recur through posts or queries standards
                    vary orem donor command tei.
                  </p>
                </div>
                <div className="flex w-full gap-4">
                  <div className="p-3 rounded-full bg-[#1b1b1b] flex items-center justify-center">
                    <ICONS.INSTAGRAM className="w-5 h-5 text-white" />
                  </div>
                  <div className="p-3 rounded-full bg-[#1b1b1b] flex items-center justify-center">
                    <ICONS.FACEBOOK className="w-5 h-5 text-white" />
                  </div>
                  <div className="p-3 rounded-full bg-[#1b1b1b] flex items-center justify-center">
                    <ICONS.YOUTUBE className="w-5 h-5 text-white" />
                  </div>
                  <div className="p-3 rounded-full bg-[#1b1b1b] flex items-center justify-center">
                    <ICONS.LINKEDIN className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="w-[100%] sm:w-[41%] md:w-[16%] md:px-4">
                <h3 className="mb-5 font-medium text-white text-xl/7">
                  About us
                </h3>
                <ul className="space-y-4 text-base font-medium text-[#fff] opacity-[.7]">
                  {aboutUsLinks.map((item, index) => (
                    <li
                      key={index}
                      className="transition-all duration-300 hover:text-suxnix-text_secondary"
                    >
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-[100%] sm:w-[41%] md:w-[16%] md:px-4">
                <h3 className="mb-5 font-medium text-white text-xl/7">
                  Support
                </h3>
                <ul className="space-y-4 text-base font-medium text-[#fff] opacity-[.7]">
                  {supportLinks.map((item, index) => (
                    <li
                      key={index}
                      className="transition-all duration-300 hover:text-suxnix-text_secondary"
                    >
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-[100%] sm:w-[41%] md:w-[33%] md:px-4 lg:pl-[70px] space-y-5">
                <h3 className="mb-5 font-medium text-white text-xl/7">
                  Contact us
                </h3>
                <p className="opacity-[.7] text-white text-base/7">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
                <div>
                  <ul className="space-y-4">
                    <li className="flex gap-2 font-medium text-white">
                      <ICONS.PHONE className="w-5 h-5 text-suxnix-text_secondary" />
                      +1 (555) 000-0000
                    </li>
                    <li className="flex gap-2 font-medium text-white">
                      <ICONS.MAIL className="w-5 h-5 text-suxnix-text_secondary" />
                      Suxnix@example.com{" "}
                    </li>
                    <li className="flex gap-2 font-medium text-white">
                      <ICONS.BROWSER className="w-5 h-5 text-suxnix-text_secondary" />
                      www.suxnixdomain.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* shapes */}
          <div className="absolute left-0 bottom-[100px] z-[-1]">
            <img
              src="https://suxnix-dev.myshopify.com/cdn/shop/files/footer_shape01_37052e5f-b0c1-4b24-a968-ab1bf6162c54.png?v=1737133750"
              alt="shape 1"
            />
          </div>
          <div className="absolute right-0 bottom-[170px] z-[-1]">
            <img
              src="https://suxnix-dev.myshopify.com/cdn/shop/files/footer_shape02_6c27ba26-cc9a-421c-ac37-46af9a3a907a.png?v=1737133750"
              alt="shape 2"
            />
          </div>
        </div>
        {/* copyright */}
        <div className="py-[25px] border-t border-[#262626] bg-[#0a0a0a]">
          <div className="container mx-auto md:max-w-[960px] lg:max-w-[1320px] px-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-y-4">
              {/* copyright text */}
              <div className="font-normal text-white sm:px-4">
                <p>Copyright © 2025 Suxnix All Rights Reserved.</p>
              </div>
              <div className="sm:px-4">
                <img
                  src="https://suxnix-dev.myshopify.com/cdn/shop/files/card_img_7d7d11a3-0daa-4469-956c-846a4c9b8acf.png?v=1737133834"
                  alt="payments"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .footer-top-wrap:before {
    content: "";
    position: absolute;
    left: 0;
    top: -22px;
    width: 100%;
    height: 53px;
    background-image: url("https://suxnix-dev.myshopify.com/cdn/shop/t/2/assets/footer_bg_shape.png");
    background-repeat: repeat;
    background-position: center;
    z-index: -1;
  }
`;

export default Footer;
