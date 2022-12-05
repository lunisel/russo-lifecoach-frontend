import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const BlogCard = ({ singlePost }) => {
  const navigate = useNavigate();
  return (
    <div className="card-blog-container">
      <div className="blog-card-img-cont">
        <img src={singlePost.image} alt="blog-cover" />
      </div>
      <div className="blog-card-content">
        <h1>{singlePost.headline}</h1>
        <p>{singlePost.description}</p>
        <span>{singlePost.articleBody}</span>
        <div
          className="blog-card-button"
          onClick={() => navigate(`/blog/${singlePost.id}`)}
        >
          Scopri di più
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
