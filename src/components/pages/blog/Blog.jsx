import React from "react";
import blogPostMock from "../../../mocks/blogPostMock.json";
import BlogCard from "../../organisms/blog-card/BlogCard";
import waves from "../../../assets/waves.png";
import "./styles.css";

const Blog = ({ history }) => {
  const allPosts = blogPostMock;
  return (
    <div className="big-container">
      <img src={waves} alt="colored-waves" className="waves" />
      <div className="container">
        <h1 className="blog-title">Blog</h1>
        <div className="all-blogs-container">
          {allPosts.map((item) => (
            <BlogCard singlePost={item} history={history} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
