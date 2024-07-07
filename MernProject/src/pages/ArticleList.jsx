import React from "react";
import articleContent from "../../utils/Content";
import { Link } from "react-router-dom";
function ArticleList() {
  return (
    <div>
      <h1>My Articles</h1>
      {articleContent.map((article, index) => (

        <div className="container p-4 h-40 border md:w-1/2 " key={index}>
          <div className="">
          <Link to={`/Services/${article.name}`}>
            <img src={article.thumbnail} alt="articlepics" className="md:h-36 w-full object-cover object-center" />
          </Link>

          </div>
        </div>
        

      ))}
    </div>
  );
}

export default ArticleList;
