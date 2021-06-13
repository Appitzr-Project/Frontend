import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { getAllVenueList } from '../../../redux/api/venue.api';
import NavBar from '../../NavBar/index.jsx';
import Footer from '../../Footer';
// import QRCode from 'qrcode.react'

import placeholder from 'assets/img/lazy-placeholder-100-100-white.png';
import how1SVG from 'assets/img/how_1.svg';
import how2SVG from 'assets/img/how_2.svg';
import how3SVG from 'assets/img/how_3.svg';
import HomeCatPizza from 'assets/img/home_cat_pizza.jpg';
import HomeCatSushi from 'assets/img/home_cat_sushi.jpg';
import HomeCatHamburger from 'assets/img/home_cat_hamburgher.jpg';
import HomeCatVegetarian from 'assets/img/home_cat_vegetarian.jpg';
import HomeCatBakery from 'assets/img/home_cat_bakery.jpg';
import HomeCatChinesse from 'assets/img/home_cat_chinesse.jpg';
import HomeCatMexican from 'assets/img/home_cat_mexican.jpg';
import LazyPlaceholder600x400 from 'assets/img/lazy-placeholder-600-400.png';
import SubmitRestaurantHome from 'assets/img/submit_restaurant_home.jpg';
import SubmitRiderHome from 'assets/img/submit_rider_home.jpg';
import 'assets/css/home.css';


const MemberHome = () => {
  const [category, setCategory] = useState();
  const [urlVenue, setUrlVenue] = useState();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const history = useHistory();

  // api
  useEffect(() => {
    let isActive = true;
    const http = async () => {
      try {
        setLoading(true);
        const res = await getAllVenueList();
        if (isActive) {
          setItems(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    http();
    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    // Img src
    if (!loading) {
      const imgEl = document.querySelectorAll('img');
      if (imgEl) {
        imgEl.forEach((el) => {
          const attSrc = el.getAttribute('data-src');
          if (attSrc) el.src = el.getAttribute('data-src');
        });
      }
    }
  }, [loading]);
  return !loading ? (
    <>
      <NavBar />
      <main>
        <div className="hero_single version_1">
          <div className="opacity-mask">
            <div className="container">
              <div className="row justify-content-lg-start justify-content-md-center">
                <div className="col-xl-6 col-lg-8 d-block d-sm-none">
                {/* <QRCode value="https://appetizr.co/menulist/ce268624-c3a2-4be6-94ae-94484447ebdf" style={{ width : '70%' , height: 'auto' }} /> */}
                <Link to="/scan" className="btn_1 full-width mb_5">Scan Qr Code</Link>
                </div>
                <div className="col-xl-6 col-lg-8 d-none d-sm-block">
                  <h1>Just a touch away</h1>
                  <p>Start searching for next dining experience</p>
                  <form method="post" action="grid-listing-filterscol.html">
                    <div className="row no-gutters custom-search-input">
                      <div className="col-lg-10">
                        <div className="form-group">
                          <input className="form-control no_border_r" type="text" placeholder="What are you looking for..." />
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <button className="btn_1 gradient" type="submit">Search</button>
                      </div>
                    </div>
                    <div className="search_trends">
                      <h5>Trending:</h5>
                      <ul>
                        <li><a href="#0">Sushi</a></li>
                        <li><a href="#0">Burgher</a></li>
                        <li><a href="#0">Chinese</a></li>
                        <li><a href="#0">Pizza</a></li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="wave hero"></div> */}
        </div>

        <div className="shape_element_2">
          <div className="container margin_30_40">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box_how">
                      <figure><img src={placeholder} data-src={how1SVG} alt="" width="150" height="167" className="lazy" /></figure>
                      <h3>Have an Appetite?</h3>
                      <p>Whether at a cafe, club, pub, restaurant or if you are looking for something new Appetizr can improve your dining experience.</p>
                    </div>
                    <div className="box_how">
                      <figure><img src={placeholder} data-src={how2SVG} alt="" width="130" height="145" className="lazy" /></figure>
                      <h3>Earn Rewards</h3>
                      <p>Share and earn reward points to save on the next time you eat out.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="box_how">
                      <figure><img src={placeholder} data-src={how3SVG} alt="" width="150" height="132" className="lazy" /></figure>
                      <h3>Enjoy Food</h3>
                      <p>No need for menus with Appetizr! Simply search for your venue or scan their QR code and Boom! The menu is on your screen. You can order and pay in your own time.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 align-self-center">
                <div className="intro_txt">
                  <div className="main_title">
                    <span><em></em></span>
                    <h2>How Appetizr Works</h2>
                  </div>
                  <p className="lead">Appetizr was developed by food lovers for food lovers! You can search your local areas for new spots to eat, read their menu and order and pay.</p>
                  <p>You can enjoy the atmosphere of dining while remaining being as contactless as possible. You can do it all on Appetizr, Order, Pay and Tip your service staff!</p>
                  <p><Link to="/login" className="btn_1 mt-2"><a>Join Now<i className="arrow_triangle-right"></i></a></Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg_gray">
          <div className="container margin_60">
            <div className="main_title center">
              <span><em></em></span>
              <h2>Popular Categories</h2>
              <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
            </div>
            <div className="owl-carousel owl-theme categories_carousel">
              <div className="item_version_2">
                <a href="grid-listing-filterscol.html">
                  <figure>
                    <span>98</span>
                    <img src={HomeCatPizza} alt="" className="owl-lazy " width="350" height="450" />
                    <div className="info">
                      <h3>Pizza</h3>
                      <small>Avg price $40</small>
                    </div>
                  </figure>
                </a>
              </div>
              <div className="item_version_2">
                <a href="grid-listing-filterscol.html">
                  <figure>
                    <span>87</span>
                    <img src={HomeCatSushi} alt="" className="owl-lazy " width="350" height="450" />
                    <div className="info">
                      <h3>Japanese</h3>
                      <small>Avg price $50</small>
                    </div>
                  </figure>
                </a>
              </div>
              <div className="item_version_2">
                <a href="grid-listing-filterscol.html">
                  <figure>
                    <span>55</span>
                    <img src={HomeCatHamburger} alt="" className="owl-lazy " width="350" height="450" />
                    <div className="info">
                      <h3>Burghers</h3>
                      <small>Avg price $55</small>
                    </div>
                  </figure>
                </a>
              </div>
              <div className="item_version_2">
                <a href="grid-listing-filterscol.html">
                  <figure>
                    <span>55</span>
                    <img src={HomeCatVegetarian} alt="" className="owl-lazy " width="350" height="450" />
                    <div className="info">
                      <h3>Vegetarian</h3>
                      <small>Avg price $40</small>
                    </div>
                  </figure>
                </a>
              </div>
              <div className="item_version_2">
                <a href="grid-listing-filterscol.html">
                  <figure>
                    <span>65</span>
                    <img src={HomeCatBakery} alt="" className="owl-lazy " width="350" height="450" />
                    <div className="info">
                      <h3>Bakery</h3>
                      <small>Avg price $60</small>
                    </div>
                  </figure>
                </a>
              </div>
              <div className="item_version_2">
                <a href="grid-listing-filterscol.html">
                  <figure>
                    <span>25</span>
                    <img src={HomeCatChinesse} alt="" className="owl-lazy " width="350" height="450" />
                    <div className="info">
                      <h3>Chinese</h3>
                      <small>Avg price $40</small>
                    </div>
                  </figure>
                </a>
              </div>
              <div className="item_version_2">
                <a href="grid-listing-filterscol.html">
                  <figure>
                    <span>35</span>
                    <img src={HomeCatMexican} alt="" className="owl-lazy " width="350" height="450" />
                    <div className="info">
                      <h3>Mexican</h3>
                      <small>Avg price $35</small>
                    </div>
                  </figure>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin_60_0">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="row">
                <div className="col-md-6">
                  <div className="box_info_1 pr-lg-3">
                    <div className="wrapper_img">
                      <figure><img src={LazyPlaceholder600x400} data-src={SubmitRestaurantHome} alt="" className="img-fluid lazy" /></figure>
                      <span></span>
                    </div>
                    <h3>Suggest Your Restaurant</h3>
                    <p>Earn rewards for being the first to suggest your favourite venue.</p>
                    <a href="#0"><strong>Read more &rarr;</strong></a>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="box_info_1 pl-lg-3">
                    <div className="wrapper_img">
                        <figure><img src={LazyPlaceholder600x400} data-src={SubmitRiderHome} alt="" className="img-fluid lazy" /></figure>
                      <span></span>
                    </div>
                    <h3>Refer a Friend</h3>
                    <p>Sharing is caring and we want tp reward youjust for sharing. The more you share to more you earn.</p>
                    <a href="#0"><strong>Read more &rarr;</strong></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <div id="toTop"></div>
    </>
  ) : "Loading...";
};

export default MemberHome;
