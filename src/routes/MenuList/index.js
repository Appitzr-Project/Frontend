import React, { useEffect, useState } from 'react';
import MenuListBanner from '../../components/MenuList/components/MenuListBanner';
import MenuListContentContainer from '../../components/MenuList/components/MenuListContentContainer';
import MenuListModalDetail from '../../components/MenuList/components/MenuListModalDetail';
import './styles.css';
import 'assets/css/detail-page.css';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';

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
        const attSrc = el.getAttribute('data-src');
        if (attSrc) el.src = el.getAttribute('data-src');
      });
    }

    const headerEl = document.querySelector('.secondary_nav');
    const sentinalEl = document.querySelector('.hero_in');
    const spacerEl = document.querySelector('.spacer');

    let handler = () => { };
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

    // change className in Header 
    document.getElementById("header-nav").className = "header_in clearfix";
  }, []);
  return (
    <>
      <NavBar className='header_in' />
      <main>
        <MenuListBanner />
        <MenuListContentContainer handleShow={handleShow} />
      </main>
      <Footer />
      <MenuListModalDetail
        show={show}
        handleClose={handleClose}
        menuDetailData={menuDetail}
      />
    </>
  );
};

export default MenuList;
