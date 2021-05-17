import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="wave footer" />
      <div className="container margin_60_40 fix_mobile">

        <div className="row">

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

            </div>
          </div>
        </div>
        <hr />
        <div className="row add_bottom_25">
          <div className="col-lg-6">

          </div>
          <div className="col-lg-6">
            <ul className="additional_links">
              <li>
                <Link to="/tos">Terms and conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li><span>© Appetizr</span></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer