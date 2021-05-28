import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { signOutAction } from '../../redux/actions/auth.action';
import avatar1 from 'assets/img/avatar1.jpg';

const NavBar = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const [ states , setState ] = useState({
    isDisplaySidebar: false
  })
  const auth = useSelector(state => state.auth);
  const user = auth.user && auth.user.attributes


  const renderUserLogged = () => (
    <ul id="top_menu" className="drop_user">
      <li>
        <div class="dropdown user clearfix">
          <a href="#" data-toggle="dropdown" aria-expanded="false">
            <figure><img src={avatar1} alt="" /></figure><span>{user.email}</span>
          </a>
          <div className="dropdown-menu" >
            <div className="dropdown-menu-content">
              <ul>
                <li><a href="#0"><i className="icon_cog"></i>Dashboard</a></li>
                <li><a href="#0"><i className="icon_document"></i>Bookings</a></li>
                <li><a href="#0"><i className="icon_heart"></i>Wish List</a></li>
                <li><a href="/venue/profile"><i className="icon_heart"></i>Register as Venue</a></li>
                <li><a href="#0" onClick={onLogout}><i className="icon_key"></i>Log out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )

  const renderUserNotLogin = () => (
    <ul id="top_menu">
      <li><Link to="/login" className="login">Sign In</Link></li>
      <li><Link to="/" className="wishlist_bt_top">Love</Link></li>
    </ul>
  )

  const onLogout = () => {
    dispatch(signOutAction()).then(() => {
      history.push('/login')
    })
  }


  return (
    <>
      <header className="header black_nav clearfix element_to_stick" id="header-nav">
        <div className="container">
          <div id="logo">
            <Link to="/">
              <h1>Appetizr</h1>
            </Link>
          </div>
          <div className={`layer ${ states.isDisplaySidebar ? 'layer-is-visible' : ''}`} 
               onClick={() => setState({ ...states , isDisplaySidebar : false })} ></div>

          {user && user.email ? renderUserLogged() : renderUserNotLogin()}

          <a href="#0" className="open_close" 
             onClick={() => setState({ ...states , isDisplaySidebar : true })} >
            <i className="icon_menu"></i><span>Menu</span>
          </a>
          <nav className={`main-menu ${ states.isDisplaySidebar ? 'show' : ''}`} >
            <div id="header_menu">
              <a href="#0" className="open_close"
                 onClick={() => setState({ ...states , isDisplaySidebar : false })} >
                <i className="icon_close"></i><span>Menu</span>
              </a>
              <a href="index.html"><h1>Appetizr</h1></a>
            </div>
            <ul>
              <li className="submenu">
                <Link Link to="/" className="show-submenu" >Home</Link>
              </li>
              <li className="submenu">
                <Link Link to="/" className="show-submenu" >About</Link>
              </li>
              <li className="submenu">
                <Link Link to="/venue-list" className="show-submenu" >Venue List</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

    </>)
}

export default NavBar