import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../imgaes/burn-out-wheel-png.png'
import './Header.css';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img className="logo " src={logo} alt=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to="/home" class="nav-link" >Home <span class="sr-only"></span></Link>
      </li>
      <li class="nav-item">
      <Link to="/destination" class="nav-link" >Destination</Link>
      </li>
      <li class="nav-item">
      <Link to="/blog"class="nav-link">Blog</Link>
      </li>
      <li class="nav-item">
      <Link to="/login" class="nav-link ">Login</Link>
      </li>
      <li class="nav-item">
      <Link to="/home" class="nav-link ">ID:{loggedInUser.name}</Link>
      </li>
    </ul>
  </div>
</nav>

    );
};

export default Header;