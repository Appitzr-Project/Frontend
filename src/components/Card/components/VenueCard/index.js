import React, { memo } from "react";
import { Link } from "react-router-dom";

const VenueCard = ({ discount, src, category, venueName, location, star }) => {
  return (
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
      <div class="strip">
        <figure>
          <span class="ribbon off">{discount}% off</span>
          <img {...src} data-src={src} class="img-fluid lazy" alt={category} />
          <Link {...to} class="strip_info">
            <small>{category}</small>
            <div class="item_title">
              <h3>{venueName}</h3>
              <small>{location}</small>
            </div>
          </Link>
        </figure>
        <ul>
          <li>
            <div class="score">
              <strong>{star}</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(VenueCard);
