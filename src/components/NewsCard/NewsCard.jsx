import React from "react";

import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import "./style.css";

const NewsCard = ({
  news: { title, thumbnail, short_description, id, article_url },
  status,
}) => {
  return (
    <>
      {status ? (
        <div className="d-flex align-items-center justify-content-center f-height">
          <ClipLoader color={"#777"} />
        </div>
      ) : (
        <div className="col-md-4" key={id}>
          <div className="boxNews bg-dark rounded overflow-hidden">
            <img src={thumbnail} alt={title} className="w-100" />
            <div className="infoNews text-center text-white p-4">
              <h4>{title?.split(" ").slice(0, 5).join(" ")}</h4>
              <p>{short_description?.split(" ").slice(0, 10).join(" ")}</p>
              <Link className="btn btn-primary" to={article_url}>
                Read Article
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsCard;
