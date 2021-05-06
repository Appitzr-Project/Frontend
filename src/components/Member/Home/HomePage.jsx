
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { getAllVenueList } from "../../../redux/api/venue.api";
import { Helmet } from "react-helmet";
import NavBar from '../../NavBar/index.jsx';
import Footer from '../../Footer';

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
    }
    http();
    return () => {
      isActive = false;
    }
  }, []);


 

  return !loading ? (
    <>    
    <NavBar />
      <Helmet >
        <link href="assets/css/home.css" rel="stylesheet" />
      </Helmet>
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

      <Footer />

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