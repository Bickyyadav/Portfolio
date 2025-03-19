import React, { useState, useEffect } from "react";
import fetchHashnodeBlogs from "../fetchData/apiFetch";
import Footer from "../components/footer"

const Articles = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchHashnodeBlogs();
        setBlogs(data);
      } catch (err) {
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="px-44">
        <p className="mt-24 text-4xl">⚡</p>
        <p className=" font-bold text-gray-700 text-4xl">
          I write about technology
        </p>
        <p className=" text-gray-500">
          Ever since I was a kid, I've been fascinated by technology.
        </p>
      </div>


      {blogs.map((blog) => (
        <div key={blog.id} className=" blog-card flex items-center  px-44 py-4">
          <div className=" mt-4">
            <div className="flex  gap-6">
              <div>
                <img
                  src={blog.coverImage.url}
                  alt={blog.title}
                  className="w-100 aspect-[16/9] object-cover rounded-xl shadow-md border border-gray-300 hover:scale-105 transition-transform duration-300 hover:shadow-xl"
                />
              </div>
              <div className="flex-col">
                <p className="mb-2 font-bold text-gray-600">{blog.title}</p>
                <p className="text-gray-500">{blog.brief}</p>
                <div className="pt-10 text-sm text-gray-500 flex gap-4"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
  <Footer/>
    </div>
  );
};

export default Articles;


{
  /* <>
<div className="blogs-container">
{blogs.map((blog) => (
  <div key={blog.id} className="blog-card">
    <img src={blog.coverImage.url} alt={blog.title} />
    <h3>{blog.title}</h3>
    <p>{blog.brief}</p>
    <p>Published on: {new Date(blog.publishedAt).toLocaleDateString()}</p>
    <a
      href={`https://blog.aashesh.cloud/${blog.slug}`} // Replace with your Hashnode blog URL
      target="_blank"
      rel="noopener noreferrer"
    >
      Read More
    </a>
  </div>
))}
</div>
</> */
}
