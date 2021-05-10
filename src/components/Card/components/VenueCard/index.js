import React, { memo } from "react";
import { Link } from "react-router-dom";

const VenueCard = ({ discount, src, category, venueName, location, star, to }) => {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
      <div className="strip">
        <figure>
          <span className="ribbon off">{discount}% off</span>
          <img src={src} data-src={src} className="img-fluid lazy" alt={category} />
          <Link {...to} className="strip_info">
            <small>{category}</small>
            <div className="item_title">
              <h3>{venueName}</h3>
              <small>{location}</small>
            </div>
          </Link>
        </figure>
        <ul>
          <li>
            <div className="score">
              <strong>{star}</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(VenueCard);
