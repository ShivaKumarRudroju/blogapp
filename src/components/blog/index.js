import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";

import "./index.css";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
        const data = await response.json();
        setBlog(data);
        setLoader(false);
        console.log(data);
      } catch (e) {
        console.log(`${e.message}`);
      }
    };
    fetchBlog();
  }, [id]);

  return (
    <div>
      {loader ? (
        <div className="loader">
          <Circles height={50} width={50} type="tail-spinner" color="#00BFFF" />
        </div>
      ) : (
        <div key={blog.id} className="blog-page">
          <img
            src={blog.avatar_url}
            alt={blog.title}
            className="avatar-image"
          />
          <p>{blog.author}</p>
          <h1>{blog.title}</h1>
          <img src={blog.image_url} alt={blog.title} className="image" />
          <p className="content">{blog.content}</p>
        </div>
      )}
    </div>
  );
};
export default Blog;
