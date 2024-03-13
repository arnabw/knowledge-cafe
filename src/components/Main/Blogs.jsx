import { useState, useEffect } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmarks, handleReadTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/arnabw/knowledge-cafe/main/public/blogs.json"
      );
      const data = await res.json();
      setBlogs(data);
    };
    fetchData();
  }, []);
  return (
    <section className="lg:flex-1 space-y-6">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBookmarks={handleBookmarks}
          handleReadTime={handleReadTime}
        ></Blog>
      ))}
    </section>
  );
};

Blogs.propTypes = {
  handleBookmarks: PropTypes.func.isRequired,
  handleReadTime: PropTypes.func.isRequired,
};

export default Blogs;
