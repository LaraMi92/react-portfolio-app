// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './header.scss';

// == Composant
const Header = () => (

  <nav className="nav">
    <NavLink exact activeClassName="nav__link" to="/">Home</NavLink>
    <NavLink exact activeClassName="nav__link" to="/videos">Vidéos</NavLink>
    <NavLink exact activeClassName="nav__link" to="/images">Images</NavLink>
  </nav>

);

// == Export
export default Header;
