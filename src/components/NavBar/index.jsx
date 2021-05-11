import { Link, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { signOutAction } from '../../redux/actions/auth.action';
import avatar1 from 'assets/img/avatar1.jpg';

const NavBar = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const auth = useSelector(state => state.auth);
  const user = auth.user && auth.user.attributes

  const renderUserLogged = () => (
    <ul id="top_menu" className="drop_user">
      <li>
          <div class="dropdown user clearfix">
              <a href="#" data-toggle="dropdown" aria-expanded="false">
                  <figure><img src={avatar1} alt="" /></figure><span>{ user.email }</span>
              </a>
              <div className="dropdown-menu" >
                  <div className="dropdown-menu-content">
                      <ul>
                          <li><a href="#0"><i className="icon_cog"></i>Dashboard</a></li>
                          <li><a href="#0"><i className="icon_document"></i>Bookings</a></li>
                          <li><a href="#0"><i className="icon_heart"></i>Wish List</a></li>
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

  return(
    <>
      <header className="header black_nav clearfix element_to_stick">
        <div className="container">
          <div id="logo">
            <a href="index.html">
              <h1>Appetizr</h1>
            </a>
          </div>
          <div className="layer"></div>
         
          { user && user.email ? renderUserLogged() : renderUserNotLogin() }

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