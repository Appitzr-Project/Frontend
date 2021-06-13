import React, { memo } from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ src, name, to }) => {
  return (
    <div className="item" style={{margin:"10px"}}>
      <figure>
        <Link to={"/venue-list?category="+to}>
          <img src={src} data-src={src} alt={name} className="owl-lazy" />
        </Link>
        <Link to={"/venue-list?category="+to}>
          <h3>{name}</h3>
        </Link>
      </figure>
    </div>
  );
};

export default memo(CategoryCard);
