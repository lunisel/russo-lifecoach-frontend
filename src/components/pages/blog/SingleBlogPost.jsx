import React from "react";
import { useParams } from "react-router-dom";
import blogPostMock from "../../../mocks/blogPostMock.json";
import "./styles.css";

const SingleBlogPost = () => {
  const params = useParams();
  const singlePost = blogPostMock.find(
    (item) => item?.id.toString() === params.id
  );
  return (
    <div className="big-container">
      <div className="container single-blog">
        <h1 className="single-blog-title">{singlePost.headline}</h1>
        <p className="single-blog-description">{singlePost.description}</p>
        <p className="single-blog-body">{singlePost.articleBody}</p>
      </div>
    </div>
  );
};

export default SingleBlogPost;
