import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVenueById } from '../../../../redux/api/venue.api';
import MenuListBannerModal from './MenuListBannerModal';
import HeroGeneral from 'assets/img/hero_general.jpg';

const MenuListBanner = () => {
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(false);
  const [item, setItem] = useState({});
  const params = useParams();

  useEffect(() => {
    let isActive = true;
    const http = async () => {
      if (params.idVenue) {
        try {
          const res = await getVenueById(params.idVenue);
          if (isActive) {
            setItem(res.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
      return;
    };
    http();

    return () => {
      isActive = false;
    };
  }, [params]);
  return (
    <>
      <div
        className="hero_in detail_page background-image"
        data-background={`url(${item.banner ? item.banner : HeroGeneral})`}
      >
        <div
          className="wrapper `op`acity-mask"
          data-opacity-mask="rgba(0, 0, 0, 0.5)"
        >
          <div className="container">
            <div className="main_info">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="head">
                    <div className="score">
                      <span>
                        Superb<em>350 Reviews</em>
                      </span>
                      <strong>8.9</strong>
                    </div>
                  </div>
                  <h1>{item?.venueName}</h1>
                  {item?.address}{' '}
                  <a
                    href={`https://www.google.com/maps/dir//${item?.mapLong},${item?.mapLat}`}
                    target="blank"
                  >
                    Get directions
                  </a>
                </div>
                <div className="col-xl-8 col-lg-7 col-md-6">
                  <div className="buttons clearfix">
                    <span className="magnific-gallery">
                      <a
                        href="# "
                        className="btn_hero"
                        title="Photo title"
                        data-effect="mfp-zoom-in"
                        style={{ marginRight: '8px' }}
                        onClick={() => setShow(true)}
                      >
                        <i className="icon_image"></i>View photos
                      </a>
                    </span>
                    <a
                      href="#0"
                      className={`btn_hero wishlist ${liked ? 'liked' : ''}`}
                      onClick={() => setLiked(!liked)}
                    >
                      <i className="icon_heart"></i>Wishlist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MenuListBannerModal show={show} setShow={setShow} />
    </>
  );
};

export default MenuListBanner;
