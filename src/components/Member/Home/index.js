import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import FormLogin from './FormLogin';

const MemberHome = () => {

  const renderHeader = () => {



    return (
      <header className="header black_nav clearfix element_to_stick">
        <div className="container">
          <div id="logo">

            <Link to='/' >
              APPETIZR
          </Link>
          </div>
          <div className="layer"></div>
          <ul id="top_menu">
            <li><a href="#sign-in-dialog" id="sign-in" className="login">Sign In</a></li>
            {/* <li><a href="wishlist.html" className="wishlist_bt_top" title="Your wishlist">Your wishlist</a></li> */}
          </ul>

          <a href="#0" className="open_close">
            <i className="icon_menu"></i><span>Menu</span>
          </a>
          {/* <nav className="main-menu">
          <div id="header_menu">
            <a href="#0" className="open_close">
              <i className="icon_close"></i><span>Menu</span>
            </a>
            <a href="index.html"><img src="img/logo.svg" width="162" height="35" alt="" /></a>
          </div>
          <ul>
            <li className="submenu">
              <a href="#0" className="show-submenu">Home</a>
              <ul>
                <li><a href="index.html">Address Autocomplete</a></li>
                <li><a href="index-2.html">Search by Keyword</a></li>
                <li><a href="index-3.html">Home Version 2</a></li>
                <li><a href="index-4.html">Video Background</a></li>
                <li><a href="index-6.html">Home with Slider</a></li>
                <li><a href="index-5.html">GDPR Cookie Bar EU Law</a></li>
                <li><a href="header-user-logged.html">Header User Logged</a></li>
                <li><a href="header-cart-top.html">Header Cart Top</a></li>
                <li><a href="modal-advertise.html">Modal 1 Cookie Session</a></li>
                <li><a href="modal-newsletter.html">Modal 2 Cookie Session</a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#0" className="show-submenu">Listing</a>
              <ul>
                <li className="third-level"><a href="#0">List pages</a>
                  <ul>
                    <li><a href="grid-listing-filterscol.html">List default</a></li>
                    <li><a href="grid-listing-filterscol-map.html">List with map</a></li>
                    <li><a href="listing-map.html">List side map</a></li>
                    <li><a href="grid-listing-masonry.html">List Masonry Filter</a></li>
                  </ul>
                </li>
                <li className="third-level"><a href="#0">Detail pages</a>
                  <ul>
                    <li><a href="detail-restaurant.html">Detail page 1</a></li>
                    <li><a href="detail-restaurant-2.html">Detail page 2</a></li>
                    <li><a href="detail-restaurant-3.html">Detail page 3</a></li>
                    <li><a href="detail-restaurant-4.html">Detail page 4</a></li>
                  </ul>
                </li>
                <li className="third-level"><a href="#0">OpenStreetMap</a>
                  <ul>
                    <li><a href="grid-listing-filterscol-openstreetmap.html">List with map</a></li>
                    <li><a href="listing-map-openstreetmap.html">List side map</a></li>
                    <li><a href="grid-listing-masonry-openstreetmap.html">List Masonry Filter</a></li>
                  </ul>
                </li>
                <li><a href="submit-restaurant.html">Submit Restaurant</a></li>
                <li><a href="submit-rider.html">Submit Rider</a></li>
                <li><a href="order.html">Order</a></li>
                <li><a href="confirm.html">Confirm Order</a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#0" className="show-submenu">Other Pages</a>
              <ul>
                <li><a href="admin_section/index.html" target="_blank">Admin Section</a></li>
                <li><a href="404.html">404 Error</a></li>
                <li><a href="help.html">Help and Faq</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="leave-review.html">Leave a review</a></li>
                <li><a href="contacts.html">Contacts</a></li>
                <li><a href="coming_soon/index.html">Coming Soon</a></li>
                <li><a href="login.html">Sign In</a></li>
                <li><a href="register.html">Sign Up</a></li>
                <li><a href="icon-pack-1.html">Icon Pack 1</a></li>
                <li><a href="icon-pack-2.html">Icon Pack 2</a></li>
                <li><a href="shortcodes.html">Shortcodes</a></li>
              </ul>
            </li>
            <li><a href="#0">Buy this template</a></li>
          </ul>
        </nav>
    */ }
        </div>
      </header>

    )
  }

 
  return (
    <>
      <Helmet>
        <link rel='stylesheet' href='css/home.css' />
      </Helmet>

      {renderHeader()}
      <main>

        <div className="hero_single version_1">
          <div className="opacity-mask">
            <div className="container">
              <div className="row justify-content-lg-start justify-content-md-center">
                <div className="col-xl-6 col-lg-8">
                  <h1>Delivery or Takeaway Food</h1>
                  <p>The best restaurants at the best price</p>
                  <form method="post" action="grid-listing-filterscol.html">
                    <div className="row no-gutters custom-search-input">
                      <div className="col-lg-10">
                        <div className="form-group">
                          <input className="form-control no_border_r" type="text" id="autocomplete" placeholder="Address, neighborhood..." />
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

        <div className="container margin_30_60">
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

        <div className="shape_element_2">
          <div className="container margin_60_0">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box_how">
                      <figure><img src="img/lazy-placeholder-100-100-white.png" data-src="img/how_1.svg" alt="" width="150" height="167" className="lazy" /></figure>
                      <h3>Easly Order</h3>
                      <p>Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin.</p>
                    </div>
                    <div className="box_how">
                      <figure><img src="img/lazy-placeholder-100-100-white.png" data-src="img/how_2.svg" alt="" width="130" height="145" className="lazy" /></figure>
                      <h3>Quick Delivery</h3>
                      <p>Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div className="box_how">
                      <figure><img src="img/lazy-placeholder-100-100-white.png" data-src="img/how_3.svg" alt="" width="150" height="132" className="lazy" /></figure>
                      <h3>Enjoy Food</h3>
                      <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros.</p>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-3 d-block d-lg-none"><a href="#0" className="btn_1 medium gradient pulse_bt mt-2">Register Now!</a></p>
              </div>
              <div className="col-lg-5 offset-lg-1 align-self-center">
                <div className="intro_txt">
                  <div className="main_title">
                    <span><em></em></span>
                    <h2>Start Ordering Now</h2>
                  </div>
                  <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur deserunt.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <p><a href="#0" className="btn_1 medium gradient pulse_bt mt-2">Register</a></p>
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

     <FormLogin />
      <Helmet>
        <script src="js/common_func.js"></script>
        <script src="assets/validate.js"></script>
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
