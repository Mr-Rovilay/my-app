import React from "react";
import { Link } from "react-router-dom";

const ArticleList = ({ content }) => {
  return (
    <div className="container">
      <div className="row">
        {content.map((post) => (
          <div className="col-12 col-md-6">
            <div class="card">
              <img src={post.img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{post.title}</h5>
                <p class="card-text">{post.excerpt.substring(0, 140)}....</p>
                <Link to={`/article/${post.title}`} class="btn btn-primary">
                  Show more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
