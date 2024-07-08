import React from "react";
import articleContent from "../../utils/Content";
import { Link } from "react-router-dom";
// import pic from "../assets/pic1.jpg"
function ArticleList() {
  return (
    <div className="container py-4 mx-auto">
      <div className="flex flex-wrap ">
      <h1 className="text-center">My Articles</h1>
      {articleContent.map((article, index) => (
        <div className=" p-4  md:w-1/2 " key={index}>
          <div className="h-full border-2 border-grey-200 rounded-lg overflow-hidden">
          <Link to={`/Services/${article.name}`}>
            <img src={article.thumbnail} alt="articlepics" className=" lg:h-48 md:h-36 w-full object-cover object-center" />
          </Link>
          <div className="p-6">
            <Link to={`/Services/${article.name}`}>
            <h1 className="text-lg font-bold">
            {article.title}
            </h1>
            </Link>
            <p className="leading-relaxed mb-3">
              {article.content[0].substring(0,110)}...
            </p>
            <Link to={`/Services/${article.name}`}>
            <h2 className="p-1 text-blue-500">Learn more</h2>
            </Link>
          </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default ArticleList;
