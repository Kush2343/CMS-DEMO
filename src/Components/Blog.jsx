import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "contentful";

const Blog = () => {
  const [Blogs, setBlogs] = useState([]);
  const client = createClient({
    space: "12qkvm4jqb2e",
    accessToken: "mblwo6WciVf51t5OfGQqAvhtCo4_YZKmLZ_fZGLZVYo",
  });

  useEffect(() => {
    const getallBlogs = async () => {
      try {
        const Blog = await client.getEntries();
        setBlogs(Blog.items);
      } catch (error) {
        console.log(`Error fetching Blogs ${error}`);
      }
    };
    getallBlogs();
  }, [client]);
  return (
    <div>
      <div className="px-28 pb-28">
        <h1 className="text-center text-3xl py-10">Blogs</h1>
        <div className="grid grid-cols-3 gap-5">
          {Blogs.map(
            (Blog, index) =>
              Blog &&
              Blog.fields &&
              Blog.fields.blogTitle && (
                <div key={index} className="flex">
                  <div className="bg-slate-50 p-5 border border-[#eeeeee] rounded-xl flex-1">
                    <img
                      src={Blog.fields.blogImage.fields.file.url}
                      alt=""
                      className="rounded-xl border-2 border-[#121212] h-[250px]"
                    />
                    <h1 className="text-2xl mt-2">{Blog.fields.blogTitle}</h1>
                    <div className="mt-2">
                      <Link
                        className="bg-black text-white text-[12px] p-2 rounded-lg"
                        to={`/blogdetail/${Blog.sys.id}`}
                      >
                        Read More..
                      </Link>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
