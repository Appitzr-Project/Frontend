import {
  Box,
  Card,
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  IconButton
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BottomNav from '../../BottomNav';
import { MENU } from '../../BottomNav/const';
import BellSVG from './assets/ic-bell.svg';
import Profile from './assets/profile.png';
import ButtonSearch from './components/ButtonSearch';
import VenueCard from './components/VenueCard';
import VenueCarousel from './components/VenueCarousel';
import VenueSVG from './assets/venue.svg';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { getAllVenueList } from "../../../redux/api/venue.api";
import { Helmet } from "react-helmet";

const useStyles = makeStyles({
  containerRoot: {
    background: 'linear-gradient(90deg, #5263C8 0%, #303C83 100%)',
  },
  cardRoot: {
    overflow: 'unset',
    padding: '33px 24px 150px 24px',
    marginTop: '24px',
    borderRadius: '50px 50px 0 0',
  },
  venueCardContainer: {
    flexWrap: 'nowrap',
    overflow: 'scroll',
  },
  venueCard: {
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(71, 71, 71, 0.1)',
    borderRadius: '30px',
  },
  desc: {
    color: '#878787',
  },
  white: {
    color: '#FFFFFF',
  },
  topContent: {
    padding: '55px 24px 35px',
  },
  pb30: {
    paddingBottom: '30px',
  },
  pb75: {
    paddingBottom: '75px',
  },
  centered: {
    margin: '0 auto',
  },
});



const MemberHome = () => {
  const auth = useSelector(state => state.auth);
  const [category, setCategory] = useState();
  const [urlVenue, setUrlVenue] = useState();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const classes = useStyles();
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
    }
    http();
    return () => {
      isActive = false;
    }
  }, []);

  useEffect(() => {
    let scripts = [
      // { src: "assets/js/validate.js" },
      { src: "assets/js/common_scripts.min.js" },
      { src: "assets/js/common_func.js" },
    ]
    scripts.forEach(item => {
      const script = document.createElement("script")
      script.src = item.src
      script.async = true
      document.body.appendChild(script)
    })
  });

  return !loading ? (
    <>
      <Helmet>
        <title>Appetizr</title>
        <meta name="description" content="Appetizr Description" />
        {'GOOGLE WEB FONT'}
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap" rel="stylesheet" />
        {'BASE CSS'}
        <link href="assets/css/bootstrap_customized.min.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />
        {'SPECIFIC CSS'}
        <link href="assets/css/home.css" rel="stylesheet" />


      </Helmet>
      <header className="header black_nav clearfix element_to_stick">
        <div className="container">
          <div id="logo">
            <a href="index.html">
              <h1>Appetizr</h1>
            </a>
          </div>
          <div className="layer"></div>
          <ul id="top_menu">            
            <li><Link to="/login" className="login">Sign In</Link></li>
          </ul>
          <a href="#0" className="open_close">
            <i className="icon_menu"></i><span>Menu</span>
          </a>
          <nav className="main-menu">
            <div id="header_menu">
              <a href="#0" className="open_close">
                <i className="icon_close"></i><span>Menu</span>
              </a>
              <a href="index.html"><h1>Appetizr</h1></a>
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
        <div className="hero_single version_1">
          <div className="opacity-mask">
            <div className="container">
              <div className="row justify-content-lg-start justify-content-md-center">
                <div className="col-xl-6 col-lg-8">
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
          <div className="wave hero"></div>
        </div>

        <div className="shape_element_2">
          <div className="container margin_30_40">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box_how">
                      <figure><img src="assets/img/lazy-placeholder-100-100-white.png" data-src="assets/img/how_1.svg" alt="" width="150" height="167" className="lazy" /></figure>
                      <h3>Have an Appetite?</h3>
                      <p>Wheather you are sitting at your favourite cafe restaurant or looking for something new. Let Appitizr assit in your dining experience</p>
                    </div>
                    <div className="box_how">
                      <figure><img src="assets/img/lazy-placeholder-100-100-white.png" data-src="assets/img/how_2.svg" alt="" width="130" height="145" className="lazy" /></figure>
                      <h3>Earn Rewards</h3>
                      <p>Share and earn reward points to save on the next time you eat out.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="box_how">
                      <figure><img src="assets/img/lazy-placeholder-100-100-white.png" data-src="assets/img/how_3.svg" alt="" width="150" height="132" className="lazy" /></figure>
                      <h3>Enjoy Food</h3>
                      <p>No need to wait for somone to bring you the menu. With a quick tap of your phone on the QR code on your table, you can start selecting your favourite dish and customise the order in your own time.</p>
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
                  <p className="lead">Appetizr was developed with food lovers that like to experience new flavours and making the the wholes experience from search and explore to sit down dining with complete in mind</p>
                  <p>From registering your attenance and helping improve the wellbing of others to ordering your favourite dish and tipping all on your phone.</p>
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
                    <img src="assets/img/home_cat_pizza.jpg" alt="" className="owl-lazy " width="350" height="450" />
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
                    <img src="assets/img/home_cat_sushi.jpg" alt="" className="owl-lazy " width="350" height="450" />
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
                    <img src="assets/img/home_cat_hamburgher.jpg" alt="" className="owl-lazy " width="350" height="450" />
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
                    <img src="assets/img/home_cat_vegetarian.jpg" alt="" className="owl-lazy " width="350" height="450" />
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
                    <img src="assets/img/home_cat_bakery.jpg" alt="" className="owl-lazy " width="350" height="450" />
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
                    <img src="assets/img/home_cat_chinesse.jpg" alt="" className="owl-lazy " width="350" height="450" />
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
                    <img src="assets/img/home_cat_mexican.jpg" alt="" className="owl-lazy " width="350" height="450" />
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
                      <figure><img src="assets/img/lazy-placeholder-600-400.png" data-src="assets/img/submit_restaurant_home.jpg" alt="" className="img-fluid lazy" /></figure><span></span>
                    </div>
                    <h3>Suggest Your Restaurant</h3>
                    <p>Earn rewards for being the first to suggest your favourite venue.</p>
                    <a href="#0"><strong>Read more &rarr;</strong></a>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="box_info_1 pl-lg-3">
                    <div className="wrapper_img">
                      <figure><img src="assets/img/lazy-placeholder-600-400.png" data-src="assets/img/submit_rider_home.jpg" alt="" className="img-fluid lazy" /></figure><span></span>
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

      <footer>
        <div className="wave footer"></div>
        <div className="container margin_60_40 fix_mobile">

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h3 data-target="#collapse_1">Quick Links</h3>
              <div className="collapse dont-collapse-sm links" id="collapse_1">
                <ul>
                  <li><a href="about.html">About us</a></li>
                  <li><a href="submit-restaurant.html">Add your restaurant</a></li>
                  <li><a href="help.html">Help</a></li>
                  <li><a href="account.html">My account</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="contacts.html">Contacts</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 data-target="#collapse_2">Categories</h3>
              <div className="collapse dont-collapse-sm links" id="collapse_2">
                <ul>
                  <li><a href="grid-listing-filterscol.html">Top Categories</a></li>
                  <li><a href="grid-listing-filterscol-full-masonry.html">Best Rated</a></li>
                  <li><a href="grid-listing-filterscol-full-width.html">Best Price</a></li>
                  <li><a href="grid-listing-filterscol-full-masonry.html">Latest Submissions</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 data-target="#collapse_3">Contacts</h3>
              <div className="collapse dont-collapse-sm contacts" id="collapse_3">
                <ul>
                  <li><i className="icon_house_alt"></i>97845 Baker st. 567<br />Los Angeles - US</li>
                  <li><i className="icon_mobile"></i>+94 423-23-221</li>
                  <li><i className="icon_mail_alt"></i><a href="#0">info@domain.com</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 data-target="#collapse_4">Keep in touch</h3>
              <div className="collapse dont-collapse-sm" id="collapse_4">
                <div id="newsletter">
                  <div id="message-newsletter"></div>
                  <form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
                    <div className="form-group">
                      <input type="email" name="email_newsletter" id="email_newsletter" className="form-control" placeholder="Your email" />
                      <button type="submit" id="submit-newsletter"><i className="arrow_carrot-right"></i></button>
                    </div>
                  </form>
                </div>
                <div className="follow_us">
                  <h5>Follow Us</h5>
                  <ul>
                    <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="assets/img/twitter_icon.svg" alt="" className="lazy" /></a></li>
                    <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="assets/img/facebook_icon.svg" alt="" className="lazy" /></a></li>
                    <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="assets/img/instagram_icon.svg" alt="" className="lazy" /></a></li>
                    <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="assets/img/youtube_icon.svg" alt="" className="lazy" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row add_bottom_25">
            <div className="col-lg-6">
              <ul class="footer-selector clearfix">
                <li>
                  <div class="styled-select lang-selector">
                    <select>
                      <option defaultValue="English" selected>English</option>
                      <option value="French">French</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Russian">Russian</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div class="styled-select currency-selector">
                    <select>
                      <option value="US Dollars" selected>US Dollars</option>
                      <option value="Euro">Euro</option>
                    </select>
                  </div>
                </li>
                <li><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="assets/img/cards_all.svg" alt="" width="230" height="35" class="lazy" /></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="additional_links">
                <li><a href="#0">Terms and conditions</a></li>
                <li><a href="#0">Privacy</a></li>
                <li><span>© FooYes</span></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div id="toTop"></div>

      <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
        <div className="modal_header">
          <h3>Sign In</h3>
        </div>
        <form>
          <div className="sign-in-wrapper">
            <a href="#0" className="social_bt facebook">Login with Facebook</a>
            <a href="#0" className="social_bt google">Login with Google</a>
            <div className="divider"><span>Or</span></div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name="email" id="email" />
              <i className="icon_mail_alt"></i>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" id="password" defaultValue="" />
              <i className="icon_lock_alt"></i>
            </div>
            <div className="clearfix add_bottom_15">
              <div className="checkboxes float-left">
                <label className="container_check">Remember me
                        <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="float-right"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
            </div>
            <div className="text-center">
              <input type="submit" defaultValue="Log In" className="btn_1 full-width mb_5" />
                      Don’t have an account? <a href="account.html">Sign up</a>
            </div>
            <div id="forgot_pw">
              <div className="form-group">
                <label>Please confirm login email below</label>
                <input type="email" className="form-control" name="email_forgot" id="email_forgot" />
                <i className="icon_mail_alt"></i>
              </div>
              <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
              <div className="text-center"><input type="submit" value="Reset Password" className="btn_1" /></div>
            </div>
          </div>
        </form>
      </div>
    </>
  ) : "Loading...";
};

export default MemberHome;