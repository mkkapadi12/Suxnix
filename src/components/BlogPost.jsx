import React from "react";
import { Button } from "./ui/button";
import { ICONS } from "@/icons/icons";
import { Link, useLocation } from "react-router-dom";

const BlogPost = (blog) => {
  const location = useLocation();

  return (
    <div className="">
      <div className="">
        <img src={blog.image} alt={blog.title} />
      </div>
      <div className="p-[30px_25px] sm:p-[35px_30px] lg:p-[40px]">
        <div className="flex flex-col items-start justify-center space-y-6">
          <div className="">
            <Button className="px-5 py-3 font-semibold text-white border-none rounded-none shadow-none bg-suxnix-text_secondary">
              {blog.category}
            </Button>
          </div>
          <div className="">
            <Link to={`/blog/news/${blog.title}`}>
              <h1 className="transition-colors duration-300 cursor-pointer hover:text-suxnix-text_primary text-2xl sm:text-3xl lg:text-[35px] !leading-tight">
                {blog.title}
              </h1>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-x-5 text-suxnix-text_heading">
            <div className="">
              <p className="text-sm">
                <ICONS.VIEWS
                  size={20}
                  className="inline mr-1 text-suxnix-text_secondary"
                />
                {blog.views} Views
              </p>
            </div>
            <div className="">
              <p className="text-sm">
                <ICONS.COMMENTS
                  size={20}
                  className="inline mr-1 text-suxnix-text_secondary"
                />
                {blog.comments} Comments
              </p>
            </div>
            <div className="">
              <p className="text-sm">
                <ICONS.CALENDAR
                  size={20}
                  className="inline mr-1 text-suxnix-text_secondary"
                />
                {blog.date}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {blog.description.map((desc, index) => {
              return <p key={index}>{desc}</p>;
            })}
          </div>
          {location.pathname === "/blog/news" && (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-center gap-3">
                <div className="w-[40px] h-[40px]">
                  <img
                    src="https://suxnix-dev.myshopify.com/cdn/shop/t/2/assets/blog-avatar.png?v=110430019567864864141738334084"
                    alt="avatar"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    By{" "}
                    <span className="text-suxnix-text_heading">
                      {blog.author}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <Link
                  className="text-sm font-semibold transition-colors duration-300 hover:text-suxnix-text_primary text-suxnix-text_heading"
                  to={blog.readMoreLink}
                >
                  <ICONS.RIGHT className="inline mr-1" size={20} />
                  Read More
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
