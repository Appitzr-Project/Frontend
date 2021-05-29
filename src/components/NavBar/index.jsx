import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { signOutAction } from '../../redux/actions/auth.action';
import avatar1 from 'assets/img/avatar1.jpg';

const NavBar = (props) => {
  const dispatch = useDispatch()
  const history = useHistory();
  const [states, setState] = useState({
    isDisplaySidebar: false
  });
  const auth = useSelector(state => state.auth);
  const user = auth.user && auth.user.attributes;
  const groupUser = (auth.user && auth.user.signInUserSession.idToken.payload['cognito:groups']) || [];
  
  // check if user have profile picture or not
  let profilePicture = null;
  if (user && user.picture && user.picture.includes('https://') && !user.picture.includes('data')) {
    profilePicture = user.picture;
  } else if (user && user.picture && user.picture.includes('data')) {
    const jsonPic = JSON.parse(user.picture);

    if (jsonPic && jsonPic.data && jsonPic.data.url) {
      profilePicture = jsonPic.data.url;
    }
  }

  const renderUserLogged = () => (
    <ul id="top_menu" className="drop_user">
      <li>
        <div className="dropdown user clearfix">
          <a href="#" data-toggle="dropdown" aria-expanded="false">
            <figure><img src={profilePicture ?? avatar1} alt="" /></figure><span>{user.name ? user.name : user.email}</span>
          </a>
          <div className="dropdown-menu" >
            <div className="dropdown-menu-content">
              <ul>
                {/* <li><a href="#0"><i className="icon_cog"></i>Dashboard</a></li>
                <li><a href="#0"><i className="icon_document"></i>Bookings</a></li>
                <li><a href="#0"><i className="icon_heart"></i>Wish List</a></li> */}
                <li><Link to='/venue/profile' className='d-flex' ><i className="icon_document"></i><span>{ groupUser.includes('venue') ? 'Profile Venue' : 'Register as Venue' }</span></Link></li>
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
      {/* <li><Link to="/" className="wishlist_bt_top">Love</Link></li> */}
    </ul>
  )

  const onLogout = () => {
    dispatch(signOutAction()).then(() => {
      history.push('/login')
    })
  }


  return (
    <>
      <header className={ `header black_nav clearfix element_to_stick ${props.className}` } id="header-nav">
        <div className="container">
          <div id="logo">
            <Link to="/">
              <h2>Appetizr</h2>
            </Link>
          </div>
          <div className={`layer ${states.isDisplaySidebar ? 'layer-is-visible' : ''}`}
            onClick={() => setState({ ...states, isDisplaySidebar: false })} ></div>

          {user && user.email ? renderUserLogged() : renderUserNotLogin()}

          <a href="#0" className="open_close"
            onClick={() => setState({ ...states, isDisplaySidebar: true })} >
            <i className="icon_menu"></i><span>Menu</span>
          </a>
          <nav className={`main-menu ${states.isDisplaySidebar ? 'show' : ''}`} >
            <div id="header_menu">
              <a href="#0" className="open_close"
                onClick={() => setState({ ...states, isDisplaySidebar: false })} >
                <i className="icon_close"></i><span>Menu</span>
              </a>
              <a href="index.html"><h1>Appetizr</h1></a>
            </div>
            <ul>
              <li className="">
                <Link to="/" className="show-submenu" >Home</Link>
              </li>
              {/* <li className="submenu">
                <Link to="/" className="show-submenu" >About</Link>
              </li> */}
              <li className="">
                <Link to="/venue-list" className="show-submenu" >Venue List</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

    </>)
}

export default NavBar