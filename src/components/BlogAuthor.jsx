import React from "react";
import {
  authorSocialsIcons,
  blogCategories,
  blogPosts,
  instagramFeed,
  populartags,
} from "@/Data/blogpageData";
import { ICONS } from "@/icons/icons";
import styled from "styled-components";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const BlogAuthor = () => {
  const location = useLocation();

  return (
    <Wrapper className="md:pl-[16px] space-y-8">
      <div className="p-[27px_30px_30px] border-2 border-[#f5f5f5] border-solid space-y-6">
        <h1 className="relative text-xl title pl-[20px]">About Me</h1>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden text-center">
            <img
              src="https://suxnix-dev.myshopify.com/cdn/shop/files/me.png?v=1737556294"
              alt="author"
            />
          </div>
          <h1 className="text-lg">Rosalina D. Willaimson</h1>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex gap-3">
            {authorSocialsIcons.map((icon) => {
              return (
                <icon.icon
                  key={icon.id}
                  size={20}
                  className="text-[#d1d1d1] hover:text-suxnix-text_primary cursor-pointer transition-colors duration-300"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-[27px_30px_30px] border-2 border-[#f5f5f5] border-solid space-y-6">
        <h1 className="relative text-xl title pl-[20px]">Search Objects</h1>
        <div className="relative">
          <form action="">
            <Input
              type="search"
              placeholder="Search your keyword..."
              className="border-none rounded-none shadow-none focus-visible:ring-0 !text-base text-suxnix-text_heading !p-[25px_75px_25px_25px] bg-[#f9f9f9] :placeholder:text-suxnix-text_heading"
            />
            <Button className="absolute top-0 right-0 p-[25px] border-none rounded-none shadow-none p bg-suxnix-text_secondary">
              <ICONS.SEARCH className="font-semibold text-white" />
            </Button>
          </form>
        </div>
      </div>
      <div className="p-[27px_30px_30px] border-2 border-[#f5f5f5] border-solid space-y-6">
        <h1 className="relative text-xl title pl-[20px]">Popular feeds</h1>
        <div className="space-y-5">
          {blogPosts.map((blog) => {
            return (
              <div
                key={blog.id}
                className="flex items-center justify-center gap-4"
              >
                <div className="w-[85px] lg:w-[100px] flex-[0_0_85px] lg:flex-[0_0_100px] overflow-hidden">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-sm font-semibold lg:text-lg">
                    {blog.title.slice(0, 30)}...
                  </h1>
                  <p className="text-sm text-suxnix-text_heading">
                    <ICONS.CALENDAR
                      size={16}
                      className="inline text-suxnix-text_secondary"
                    />{" "}
                    {blog.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-[27px_30px_30px] border-2 border-[#f5f5f5] border-solid space-y-6">
        <h1 className="relative text-xl title pl-[20px]">Categories</h1>
        <div>
          <ul className="space-y-3">
            {blogCategories.map((category, index) => {
              return (
                <li key={index}>
                  <Link className="p-[15px_30px] bg-[#f5f5f5] text-base font-semibold relative block text-suxnix-text_heading">
                    {category}
                    <span className="absolute top-0 right-0 w-[50px] bg-suxnix-text_secondary h-full leading-[50px] text-center text-white">
                      0
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="p-[27px_30px_30px] border-2 border-[#f5f5f5] border-solid space-y-6">
        <h1 className="relative text-xl title pl-[20px]">Never miss news</h1>
        <div className="flex gap-2">
          {authorSocialsIcons.map((item, index) => {
            return (
              <div
                key={index}
                className="p-3 transition-colors duration-300 cursor-pointer bg-[#f5f5f5] hover:bg-suxnix-text_secondary hover:text-white text-suxnix-text_heading"
              >
                <item.icon size={20} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-[27px_30px_30px] border-2 border-[#f5f5f5] border-solid space-y-6">
        <h1 className="relative text-xl title pl-[20px]">Twitter feeds</h1>
        <div className="flex flex-col gap-6">
          {[1, 2, 3].map((item) => {
            return (
              <div
                key={item}
                className="border-b border-solid border-[#e1e6ff] pb-[25px]"
              >
                <div className="flex items-start justify-between w-full gap-3">
                  {/* icon */}
                  <div className="text-blue-500">
                    <ICONS.TWITTER size={20} />
                  </div>
                  <div className="text-sm/7">
                    <p className="">
                      Rescue - #Gutenberg ready @ wordpress Theme for Creative
                      Bloggers available on @ ThemeForest
                      <Link
                        to="https://t.co/2r1POjOjgV"
                        className="ml-1 text-suxnix-text_primary"
                      >
                        https://t.co/2r1POjOjgV
                      </Link>
                    </p>
                    <span className="font-medium text-suxnix-text_heading">
                      November 29, 2024
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-[27px_30px_30px] border-2 border-[#f5f5f5] border-solid space-y-6">
        <h1 className="relative text-xl title pl-[20px]">Instagram feeds</h1>
        <div className="">
          <div className="grid grid-cols-3 gap-3">
            {instagramFeed.map((post) => {
              return (
                <div
                  className="relative cursor-pointer insta-post"
                  key={post.id}
                >
                  <img src={post.img} alt={post.id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {location.pathname === "/blog/news" && (
        <div className="p-[27px_30px_30px] border-2 border-[#f5f5f5] border-solid space-y-6">
          <h1 className="relative text-xl title pl-[20px]">Popular tags</h1>
          <div>
            <div className="flex flex-wrap gap-2">
              {populartags.map((tag) => {
                return (
                  <div
                    className="px-4 py-2 bg-[#f5f5f5] text-suxnix-text_heading text-sm font-medium"
                    key={tag.id}
                  >
                    <p>{tag.tag}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .title:before {
    content: "";
    position: absolute;
    left: 0;
    top: 5px;
    height: 20px;
    background: #0d9b4d;
    width: 2px;
  }

  input::placeholder {
    color: black;
    font-size: 14px;
    opacity: 0.8;
  }

  .insta-post:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    background: #0d9b4d;
    opacity: 0;
  }

  .insta-post:hover:before {
    opacity: 0.7;
  }
`;

export default BlogAuthor;
