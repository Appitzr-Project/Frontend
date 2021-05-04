import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const VenueDetail = () => {
  const auth = useSelector(state => state.auth);
  const [category, setCategory] = useState();
  const [urlVenue, setUrlVenue] = useState();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  // const classNamees = useStyles();
  const history = useHistory();

  useEffect(() => {
    let scripts = [
      { src: "assets/js/common_scripts.min.js" },
      { src: "assets/js/common_func.js" },
      { src: 'assets/js/specific_detail.js' }
    ]
    scripts.forEach(item => {
      const script = document.createElement("script")
      script.src = item.src
      document.body.appendChild(script)
    })
  });

  return (
    <>
      <Helmet>
        <title>Appetizr</title>
        <meta name="description" content="Appetizr Description" />
        {'GOOGLE WEB FONT'}
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap" rel="stylesheet" />
        <link href="assets/css/bootstrap_customized.min.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />
        <link href="assets/css/detail-page.css" rel="stylesheet" />
        <link href="assets/css/custom.css" hrel="stylesheet" />
      </Helmet>
      <header className="header_in clearfix">
        <div className="container">
          <div id="logo">
            <Link to='/'>
              <h1>Appetizr</h1>
            </Link>
          </div>
          <div className="layer" />
          <ul id="top_menu">
            <li><a href="#" id="sign-in" className="login">Sign In</a></li>
            <li><a href="#" className="wishlist_bt_top" title="Your wishlist">Your wishlist</a></li>
          </ul>
          <a href="#" className="open_close">
            <i className="icon_menu"></i><span>Menu</span>
          </a>
          <nav className="main-menu">
            <div id="header_menu">
              <a href="#0" className="open_close">
                <i className="icon_close"></i><span>Menu</span>
              </a>
              <Link to='/'>
                <h1>Appetizr</h1>
              </Link>
            </div>
            <ul>
              <li className="submenu">
                <Link Link to="/member/home" className="show-submenu" >Home</Link>
              </li>
              <li className="submenu">
                <Link Link to="/member/home" className="show-submenu" >About</Link>
              </li>
              <li className="submenu">
                <Link Link to="/member/home" className="show-submenu" >Venue signup</Link>
              </li>
              <li className="submenu">
                <Link Link to="/member/home" className="show-submenu" >Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="hero_in detail_page background-image" data-background="url('../../../assets/img/hero_general.jpg')">
          <div className="wrapper opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
            <div className="container">
              <div className="main_info">
                <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-6">
                    <div className="head"><div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></div>
                    <h1>Pizzeria da Alfredo</h1>
								    ITALIAN - 27 Old Gloucester St, 4530 - <a href="#" target="blank">Get directions</a>
                  </div>
                  <div className="col-xl-8 col-lg-7 col-md-6">
                    <div className="buttons clearfix">
                      <span className="magnific-gallery">
                        <a href="../../../assets/img/hero_general.jpg" className="btn_hero" title="Photo title" data-effect="mfp-zoom-in"><i className="icon_image"></i>View photos</a> &nbsp;
                        <a href="../../../assets/img/hero_general.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                        <a href="../../../assets/img/hero_general.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                      </span>
                      <a href="#0" className="btn_hero wishlist"><i className="icon_heart"></i>Wishlist</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
};

export default VenueDetail;