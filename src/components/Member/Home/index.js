import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const MemberHome = () => {

  return (
    <>
      <Helmet>
        <link rel='stylesheet' href='css/home.css' />
      </Helmet>

      <header className="header black_nav clearfix element_to_stick">
        <div className="container">
          <div id="logo">
            <a href="index.html">
              <img src="img/logo_sticky.svg" width="162" height="35" alt="" />
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
              <a href="index.html"><img src="img/logo.svg" width="162" height="35" alt="" /></a>
            </div>
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
                </div>
              </div>
            </div>
          </div>
          <div className="wave hero"></div>
        </div>

        <div className="shape_element_2">
          <div className="container margin_60_0">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box_how">
                      <figure><img src="img/lazy-placeholder-100-100-white.png" data-src="img/how_1.svg" alt="" width="150" height="167" className="lazy" /></figure>
                      <h3>Have an Appetite?</h3>
                      <p>Wheather you are sitting at your favourite cafe restaurant or looking for something new. Let Appitizr assit in your dining experience.</p>
                    </div>
                    <div className="box_how">
                      <figure><img src="img/lazy-placeholder-100-100-white.png" data-src="img/how_2.svg" alt="" width="130" height="145" className="lazy" /></figure>
                      <h3>Earn Rewards</h3>
                      <p>Share and earn reward points to save on the next time you eat out.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="box_how">
                      <figure><img src="img/lazy-placeholder-100-100-white.png" data-src="img/how_3.svg" alt="" width="150" height="132" className="lazy" /></figure>
                      <h3>Enjoy Food</h3>
                      <p>No need to wait for somone to bring you the menu. With a quick tap of your phone on the QR code on your table, you can start selecting your favourite dish and customise the order in your own time.</p>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-3 d-block d-lg-none"><a href="#0" className="btn_1 medium gradient pulse_bt mt-2">Register Now!</a></p>
              </div>
              <div className="col-lg-5 offset-lg-1 align-self-center">
                <div className="intro_txt">
                  <div className="main_title">
                    <span><em></em></span>
                    <h2>How Appetizr Works</h2>
                  </div>
                  <p className="lead">Appetizr was developed with food lovers that like to experience new flavours and making the the wholes experience from search and explore to sit down dining with complete in mind</p>
                  <p>From registering your attenance and helping improve the wellbing of others to ordering your favourite dish and tipping all on your phone.</p>
                  <p><Link to="/login" className="btn_1 medium gradient pulse_bt mt-2">Register</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg_gray">
          <div className="container margin_30_60">
            <div className="main_title center">
              <span><em></em></span>
              <h2>Popular Categories</h2>
              <p>Have an appetite forsomething new?</p>
            </div>

            <div className="owl-carousel owl-theme categories_carousel">
              <div className="item_version_2">
                <a href="grid-listing-filterscol.html">
                  <figure>
                    <span>98</span>
                    <img src="img/home_cat_placeholder.jpg" data-src="img/home_cat_pizza.jpg" alt="" className="owl-lazy" width="350" height="450" />
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
                    <img src="img/home_cat_placeholder.jpg" data-src="img/home_cat_sushi.jpg" alt="" className="owl-lazy" width="350" height="450" />
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
                    <img src="img/home_cat_placeholder.jpg" data-src="img/home_cat_hamburgher.jpg" alt="" className="owl-lazy" width="350" height="450" />
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
                    <img src="img/home_cat_placeholder.jpg" data-src="img/home_cat_vegetarian.jpg" alt="" className="owl-lazy" width="350" height="450" />
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
                    <img src="img/home_cat_placeholder.jpg" data-src="img/home_cat_bakery.jpg" alt="" className="owl-lazy" width="350" height="450" />
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
                    <img src="img/home_cat_placeholder.jpg" data-src="img/home_cat_chinesse.jpg" alt="" className="owl-lazy" width="350" height="450" />
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
                    <img src="img/home_cat_placeholder.jpg" data-src="img/home_cat_mexican.jpg" alt="" className="owl-lazy" width="350" height="450" />
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


        <div className="bg_gray">
          <div className="container margin_60_40">
            <div className="main_title">
              <span><em></em></span>
              <h2>Top Rated Restaurants</h2>
              <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
              <a href="#0">View All &rarr;</a>
            </div>
            <div className="row add_bottom_25">
              <div className="col-lg-6">
                <div className="list_home">
                  <ul>
                    <li>
                      <a href="detail-restaurant.html">
                        <figure>
                          <img src="img/location_list_placeholder.png" data-src="img/location_list_1.jpg" alt="" className="lazy" width="350" height="233" />
                        </figure>
                        <div className="score"><strong>9.5</strong></div>
                        <em>Italian</em>
                        <h3>La Monnalisa</h3>
                        <small>8 Patriot Square E2 9NF</small>
                        <ul>
                          <li><span className="ribbon off">-30%</span></li>
                          <li>Average price $35</li>
                        </ul>
                      </a>
                    </li>
                    <li>
                      <a href="detail-restaurant.html">
                        <figure>
                          <img src="img/location_list_placeholder.png" data-src="img/location_list_2.jpg" alt="" className="lazy" width="350" height="233" />
                        </figure>
                        <div className="score"><strong>8.0</strong></div>
                        <em>Mexican</em>
                        <h3>Alliance</h3>
                        <small>27 Old Gloucester St, 4563</small>
                        <ul>
                          <li><span className="ribbon off">-40%</span></li>
                          <li>Average price $30</li>
                        </ul>
                      </a>
                    </li>
                    <li>
                      <a href="detail-restaurant.html">
                        <figure>
                          <img src="img/location_list_placeholder.png" data-src="img/location_list_3.jpg" alt="" className="lazy" width="350" height="233" />
                        </figure>
                        <div className="score"><strong>9.0</strong></div>
                        <em>Sushi - Japanese</em>
                        <h3>Sushi Gold</h3>
                        <small>Old Shire Ln EN9 3RX</small>
                        <ul>
                          <li><span className="ribbon off">-25%</span></li>
                          <li>Average price $20</li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="list_home">
                  <ul>
                    <li>
                      <a href="detail-restaurant.html">
                        <figure>
                          <img src="img/location_list_placeholder.png" data-src="img/location_list_4.jpg" alt="" className="lazy" width="350" height="233" />
                        </figure>
                        <div className="score"><strong>9.5</strong></div>
                        <em>Vegetarian</em>
                        <h3>Mr. Pepper</h3>
                        <small>27 Old Gloucester St, 4563</small>
                        <ul>
                          <li><span className="ribbon off">-30%</span></li>
                          <li>Average price $20</li>
                        </ul>
                      </a>
                    </li>
                    <li>
                      <a href="detail-restaurant.html">
                        <figure>
                          <img src="img/location_list_placeholder.png" data-src="img/location_list_5.jpg" alt="" className="lazy" width="350" height="233" />
                        </figure>
                        <div className="score"><strong>8.0</strong></div>
                        <em>Chinese</em>
                        <h3>Dragon Tower</h3>
                        <small>22 Hertsmere Rd E14 4ED</small>
                        <ul>
                          <li><span className="ribbon off">-50%</span></li>
                          <li>Average price $35</li>
                        </ul>
                      </a>
                    </li>
                    <li>
                      <a href="detail-restaurant.html">
                        <figure>
                          <img src="img/location_list_placeholder.png" data-src="img/location_list_6.jpg" alt="" className="lazy" width="350" height="233" />
                        </figure>
                        <div className="score"><strong>8.5</strong></div>
                        <em>Pizza - Italian</em>
                        <h3>Bella Napoli</h3>
                        <small>135 Newtownards Road BT4</small>
                        <ul>
                          <li><span className="ribbon off">-45%</span></li>
                          <li>Average price $25</li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="banner lazy" data-bg="url(img/banner_bg_desktop.jpg)">
              <div className="wrapper d-flex align-items-center opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.3)">
                <div>
                  <small>FooYes Delivery</small>
                  <h3>We Deliver to your Office</h3>
                  <p>Enjoy a tasty food in minutes!</p>
                  <a href="grid-listing-filterscol.html" className="btn_1 gradient">Start Now!</a>
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
                    <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/twitter_icon.svg" alt="" className="lazy" /></a></li>
                    <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/facebook_icon.svg" alt="" className="lazy" /></a></li>
                    <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/instagram_icon.svg" alt="" className="lazy" /></a></li>
                    <li><a href="#0"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/youtube_icon.svg" alt="" className="lazy" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row add_bottom_25">
            <div className="col-lg-6">
              <ul className="footer-selector clearfix">
                <li>
                  <div className="styled-select lang-selector">
                    <select>
                      <option value="English" selected>English</option>
                      <option value="French">French</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Russian">Russian</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="styled-select currency-selector">
                    <select>
                      <option value="US Dollars" selected>US Dollars</option>
                      <option value="Euro">Euro</option>
                    </select>
                  </div>
                </li>
                <li><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="img/cards_all.svg" alt="" width="230" height="35" className="lazy" /></li>
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
              <input type="password" className="form-control" name="password" id="password" value="" />
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
              <input type="submit" value="Log In" className="btn_1 full-width mb_5" />
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
      <Helmet>
        <script src="js/common_scripts.min.js"></script>
        <script src="js/common_func.js"></script>
        <script>{`
function initMap() {
    var input = document.getElementById('autocomplete');
    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
        }

        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
    });
} `}
        </script>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap"></script>

      </Helmet>
    </>
  );
};

export default MemberHome;
