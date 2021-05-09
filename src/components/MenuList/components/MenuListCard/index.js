import React, { useState } from 'react';

const MenuListCard = ({ handleShow, detail, index, menuItem }) => {
  const [showMore, setShowMore] = useState(true);
  const handleCardClick = (d, a) => {
    if (a.target.id !== 'showText') handleShow(detail);
    setShowMore(!showMore);
  };
  return (
    <div className="col-md-6">
      <a
        className="menu_item modal_dialog"
        href="#modal-dialog"
        data-toggle="modal"
        data-target="#modal-dialog"
        onClick={(a) => handleCardClick(detail, a)}
      >
        <figure>
          <img src={menuItem.images[0]} alt="thumb" className="lazy" />
        </figure>
        <h3>
          {index + 1}. {menuItem.productName}
        </h3>
        <span
          dangerouslySetInnerHTML={{
            __html:
              menuItem.description.length > 50 && showMore
                ? `${menuItem.description.slice(0, 50)}... `
                : menuItem.description,
          }}
        />
        {menuItem.description.length > 50 ? (
          <a
            href="# "
            id="showText"
            onClick={(e) => {
              e.preventDefault();
              handleCardClick(null, e);
              e.preventDefault();
            }}
            style={{ marginLeft: '4px' }}
          >
            Show {showMore ? 'more' : 'less'}
          </a>
        ) : null}
        <br />
        <strong>${menuItem.price}</strong>
      </a>
    </div>
  );
};

export default MenuListCard;
