import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import styled from "styled-components";
import { blogPosts } from "@/Data/blogpageData";
import BlogPost from "@/components/BlogPost";
import BlogAuthor from "@/components/BlogAuthor";
import Footer from "@/components/Footer";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <main className="min-h-screen">
        <div>
          <HeroSection title={"Blog"} />
        </div>
        <div>
          <section className="py-[120px]">
            <div className="max-w-full sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1320px] mx-auto px-4 container">
              <div className="flex flex-col items-center justify-center gap-10 sm:gap-0 md:flex-row md:items-start md:justify-start">
                {/* BLog Content */}
                <div className="w-full md:w-[66.67%] sm:px-3">
                  <div className="space-y-10">
                    {blogPosts.map((blog) => {
                      return (
                        <div key={blog.id} className=" border-2 border-[#f5f5f5] border-solid">
                          <BlogPost {...blog} />
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* about blog */}
                <div className="w-full sm:w-[58%] md:w-[33.33%] sm:px-3">
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

export default Blog;
