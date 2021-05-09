import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProductsByVenueId } from '../../../../redux/api/products.api';
import MenuListContent from '../MenuListContent';
import MenuListNavBar from '../MenuListNavBar';
import MenuListReviews from '../MenuListReviews';

const MenuListContentContainer = ({ handleShow }) => {
  const [items, setItems] = useState([]);

  const params = useParams();

  useEffect(() => {
    let isActive = true;
    const http = async () => {
      if (params.idVenue) {
        try {
          const res = await getAllProductsByVenueId(params.idVenue);
          if (isActive) {
            setItems(res.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    http();

    return () => {
      isActive = false;
    };
  }, [params]);

  const categories = items.map((i) => {
    return i.category;
  });

  const menu = items.reduce(
    (result, item) => ({
      ...result,
      [item['category']]: [...(result[item['category']] || []), item],
    }),
    {}
  );
  const sectionRef = useRef([]);

  return (
    <>
      <MenuListNavBar categories={categories} sectionRef={sectionRef} />
      <div className="spacer" />
      <MenuListContent
        handleShow={handleShow}
        menu={menu}
        sectionRef={sectionRef}
      />
      <MenuListReviews
        sectionRef={sectionRef}
        categoryLength={categories.length}
      />
    </>
  );
};

export default MenuListContentContainer;
