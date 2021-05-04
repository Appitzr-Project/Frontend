import React, { memo } from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ src, name, to }) => {
  return (
    <div class="item">
      <figure>
        <Link {...to}>
          <img {...src} data-src={src} alt={name} class="owl-lazy" />
        </Link>
        <Link {...to}>
          <h3>{name}</h3>
        </Link>
      </figure>
    </div>
  );
};

export default memo(CategoryCard);
