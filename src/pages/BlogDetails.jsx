import React, { useEffect } from "react";
import BlogAuthor from "@/components/BlogAuthor";
import BlogPost from "@/components/BlogPost";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  authorSocialsIcons,
  blogPosts,
  incenseMoodPoints,
  populartags,
} from "@/Data/blogpageData";
import { ICONS } from "@/icons/icons";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const BlogDetails = () => {
  const { title } = useParams();
  const description = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora et dolore magnam aliquam quaerat voluptatem.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  ];

  const filterPost = blogPosts
    .filter((post) => post.title === title)
    .map((post) => ({
      ...post,
      description,
    }));

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = title;
  }, []);

  const handleComment = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Navbar />
      <main className="min-h-screen">
        <div>
          <HeroSection title={"Blog Article"} />
        </div>
        <div>
          <section className="py-[120px]">
            <div className="max-w-full sm:max-w-[540px] md:max-w-[960px] lg:max-w-[1320px] mx-auto px-4 container">
              <div className="flex flex-col items-center justify-center gap-10 md:gap-0 md:flex-row md:items-start md:justify-start">
                {/* BLog Content */}
                <div className="w-full md:w-[66.67%] sm:px-3">
                  <div className="border-2 border-[#f5f5f5] border-solid">
                    <div className="space-y-10 ">
                      {filterPost.map((blog) => {
                        return (
                          <div key={blog.id} className="">
                            <BlogPost {...blog} />
                          </div>
                        );
                      })}
                    </div>
                    <div className="p-[0_25px_25px] sm:p-[0_35px_30px] lg:p-[0_40px_40px] space-y-6">
                      <div>
                        <img
                          src="https://cdn.shopify.com/s/files/1/0701/8741/7657/files/inner_blog_thumb03.jpg?v=1737014932"
                          alt="blog post"
                        />
                      </div>
                      <div className="space-y-4 pb-[35px] border-b">
                        <h1 className="text-2xl">
                          A cleansing hot shower or bath
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia.
                        </p>
                      </div>
                      <div className="space-y-4 pb-[35px] border-b">
                        <h1 className="text-2xl">
                          Setting the mood with incense
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia.
                        </p>
                      </div>
                      <div className="space-y-4 pb-[35px]">
                        <h1 className="text-2xl">
                          Setting the mood with incense
                        </h1>
                        <ul className="space-y-3">
                          {incenseMoodPoints.map((check) => {
                            return (
                              <li
                                key={check.id}
                                className="flex items-center justify-start gap-2"
                              >
                                <ICONS.CHECK
                                  size={20}
                                  className=" text-suxnix-text_secondary"
                                />
                                <p>{check.text}</p>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="space-y-5">
                        <blockquote className="bg-suxnix-text_secondary space-y-4 text-2xl md:text-3xl text-white p-[40px_25px] md:p-[55px_60px] text-center">
                          <h1 className="text-base italic text-white">
                            by Hetmayar
                          </h1>
                          <h1 className="italic text-white !leading-tight">
                            Viral dreamcatcher keytar typewriter aest hetic
                            offal umami. Aesthetic polaroid pug pitchfork
                            post-ironic.
                          </h1>
                        </blockquote>
                        {[1, 2].map((_, index) => {
                          return (
                            <p key={index}>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum. Sed ut perspiciatis unde omnis iste natus
                              error sit voluptatem accusantium.
                            </p>
                          );
                        })}
                      </div>
                      <div className="border-b ">
                        <div className="flex items-start justify-between md:flex-row flex-col md:gap-0 gap-8 my-[50px]">
                          {/* tag */}
                          <div className="md:w-[50%] space-y-4">
                            <h1 className="text-xl">Related tags</h1>
                            <div className="flex flex-wrap gap-3">
                              {populartags.slice(0, 5).map((item) => {
                                return (
                                  <Button className="px-5 py-3 text-[12px] font-semibold uppercase border-none rounded-none shadow-none text-suxnix-text_heading hover:text-white hover:bg-suxnix-text_secondary bg-[#f5f5f5]">
                                    {item.tag}
                                  </Button>
                                );
                              })}
                            </div>
                          </div>
                          {/* share */}
                          <div className="md:w-[50%] space-y-4">
                            <h1 className="text-xl md:text-right">
                              Share post
                            </h1>
                            <div className="flex justify-end gap-3">
                              {authorSocialsIcons.map((item) => {
                                return (
                                  <item.icon
                                    size={20}
                                    className="cursor-pointer hover:text-suxnix-text_secondary"
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-7">
                        <h1 className="text-[25px]">Related posts</h1>
                        <div className="bg-[#f5f5f5] p-[50px] sm:text-start text-center">
                          <span className="text-sm font-semibold">
                            Written By
                          </span>
                          <h1 className="text-2xl sm:text-3xl">
                            Web Developer
                          </h1>
                        </div>
                      </div>
                      <div className="space-y-7">
                        <h1 className="text-[25px]">Comments</h1>
                        <div className="bg-[#f5f5f5]">
                          <form
                            className="p-[23px] sm:p-[50px] space-y-6"
                            onSubmit={handleComment}
                          >
                            {/* textarea */}
                            <div>
                              <Textarea
                                placeholder="Message"
                                className="!text-base !p-[30px_50px_30px_30px] text-black bg-white border-none rounded-none shadow-none"
                                required
                              />
                            </div>
                            {/* name */}
                            <div>
                              <Input
                                type="text"
                                className="!text-base !p-[30px_50px_30px_30px] text-black bg-white border-none rounded-none shadow-none"
                                required
                                placeholder="Name"
                              />
                            </div>
                            {/* email */}
                            <div>
                              <Input
                                type="email"
                                className="!text-base !p-[30px_50px_30px_30px] text-black bg-white border-none rounded-none shadow-none"
                                required
                                placeholder="Email"
                              />
                            </div>
                            {/* Submit */}
                            <div>
                              <Button
                                type="submit"
                                className="!text-base !p-[30px_37px] text-white bg-suxnix-text_secondary border-none rounded-none shadow-none font-semibold hover:bg-suxnix-text_primary transition-colors duration-300"
                              >
                                <ICONS.COMMENTS className="w-8 h-8 text-white" />
                                Post Comment
                              </Button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* about blog */}
                <div className="w-full md:w-[58%] lg:w-[33.33%] sm:px-3">
                  <BlogAuthor />
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

export default BlogDetails;
