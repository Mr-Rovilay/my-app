import React from "react";
import ArticleList from "./ArticleList";
import content from "../data";

function Article() {
  return (
    <div>
      <>
        <ArticleList content={content} />
      </>
    </div>
  );
}

export default Article;
