import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Link, useParams } from "react-router-dom";

const BlogDetail = () => {
  const [Blog, setBlog] = useState([]);

  let { id } = useParams();

  const client = createClient({
    space: "12qkvm4jqb2e",
    accessToken: "mblwo6WciVf51t5OfGQqAvhtCo4_YZKmLZ_fZGLZVYo",
  });

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          setBlog(entries);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getEntryById();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div>
      <div className="px-48 pb-28">
        <h1 className="text-center text-3xl py-10">
          <Link to={"/blogs"}>Blogs</Link>
        </h1>
        <div className="bg-slate-50 p-10 rounded-3xl">
          <img
            src={Blog?.fields?.blogImage?.fields?.file?.url}
            className="w-full h-[650px] border-4 border-[#121212] rounded-3xl"
          />
          <div className="bg-white p-3 mt-5">
            <h1 className="text-4xl p-2">{Blog?.fields?.blogTitle}</h1>
            <p className="italic text-[#00a9ff] p-2">
              {Blog?.fields?.blogAuthor}
            </p>
            <p className="p-2 text-gray-400">
              {formatDate(Blog?.fields?.createdDate)}
            </p>
            <p className="p-2">{Blog?.fields?.blogSummary}</p>
            <p className="p-2">“{Blog?.fields?.postContent}”</p>
          </div>
        </div>
        <Link className="p-5" to={"/blogs"}>
          Back To Blogs Page
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
