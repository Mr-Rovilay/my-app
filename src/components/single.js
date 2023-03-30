import content from "../data";
import { useParams } from "react-router-dom";
import ArticleList from "./ArticleList";

import React from "react";

function Single() {
  const { title } = useParams();
  const Article = content.find((Article) => Article.title === title);
  if (!Article) return <h1> this article is not available</h1>;

  const otherArticles = content.filter(
    (otherPosts) => otherPosts.title !== title
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div class="card">
            <h1>{Article.title}</h1>
            <img src={Article.img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{Article.title}</h5>
              <p class="card-text">{Article.excerpt}....</p>
            </div>
          </div>

          <div className="row">
            <ArticleList content={otherArticles} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
