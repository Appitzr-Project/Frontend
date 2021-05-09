import React, { useEffect, useState } from 'react';
import MenuListBanner from '../../components/MenuList/components/MenuListBanner';
import MenuListContentContainer from '../../components/MenuList/components/MenuListContentContainer';
import MenuListModalDetail from '../../components/MenuList/components/MenuListModalDetail';
import MenuHelmet from './MenuHelmet';
import './styles.css';


const MenuList = () => {
  const [show, setShow] = useState(false);
  const [menuDetail, setMenuDetail] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = (m) => {
    setMenuDetail(m);
    setShow(true);
  };

  useEffect(() => {
    // Header background
    const backgroundImageEl = document.querySelector('.background-image');
    if (backgroundImageEl) {
      backgroundImageEl.style.backgroundImage = backgroundImageEl.getAttribute(
        'data-background'
      );
    }
    // Header opacity
    const opacityMaskEl = document.querySelector('.opacity-mask');
    if (opacityMaskEl) {
      opacityMaskEl.style.backgroundColor = opacityMaskEl.getAttribute(
        'data-opacity-mask'
      );
    }
    // Img src
    const imgEl = document.querySelectorAll('img');
    if (imgEl) {
      imgEl.forEach((el) => {
        el.src = el.getAttribute('data-src');
      });
    }

    const headerEl = document.querySelector('.secondary_nav');
    const sentinalEl = document.querySelector('.hero_in');
    const spacerEl = document.querySelector('.spacer');

    let handler = () => {};
    if (headerEl && spacerEl) {
      handler = (entries) => {
        if (!entries[0].isIntersecting) {
          headerEl.classList.add('is_stuck');
          spacerEl.style.display = 'block';
        } else {
          headerEl.classList.remove('is_stuck');
          spacerEl.style.display = 'none';
        }
      };
    }

    // create the observer
    const observer = new window.IntersectionObserver(handler);
    // give the observer some dom nodes to keep an eye on
    if (sentinalEl) {
      observer.observe(sentinalEl);
    }
  }, []);
  return (
    <>
      <MenuHelmet />
      <main>
        <MenuListBanner />
        <MenuListContentContainer handleShow={handleShow} />
      </main>
      <MenuListModalDetail
        show={show}
        handleClose={handleClose}
        menuDetailData={menuDetail}
      />
    </>
  );
};

export default MenuList;
