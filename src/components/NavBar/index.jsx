import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { useEffect } from "react";

const NavBar = () => {

  
  useEffect(() => {
    
  });

  return(<>
    <Helmet>
        <title>Appetizr</title>
        <meta name="description" content="Appetizr Description" />
        {'GOOGLE WEB FONT'}
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap" rel="stylesheet" />
        {'BASE CSS'}
        <link href="assets/css/bootstrap_customized.min.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />
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
            <li><Link to="/" className="wishlist_bt_top">Love</Link></li>
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
      
  </>)
}

export default NavBar