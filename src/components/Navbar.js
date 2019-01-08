import React from 'react'
import { Link } from 'gatsby'
import Logo from '../img/logo.svg'

import '../components/scss/navbar.scss'

const Navbar = class extends React.Component {

 render() {
   return (
      <nav className="main-nav navbar navbar-expand-lg navbar-light" role="navigation" id="navig">
      <Link className="" to="/">
                <img className="navbar-brand pt-3 pl-1" src={Logo} alt="Manufaktura Koda"/>
          </Link>
   <input type="checkbox" id="nav" className="hidden" />
   <label for="nav" className="nav-btn">
   <i></i>
   <i></i>
   <i></i>
   </label>
   <div className="nav-wrapper">
      <div className="container-fluid">
         <ul className="nav navbar-nav " id="levo">
            <li
            className="nav-item"
            >
            <Link to="/" className="nav-link" activeClassName="active">
            O nama
            </Link>
            </li>
            <li
            className="nav-item"
            >
            <Link to="/usluge/" className="nav-link" activeClassName="active">
            Usluge
            </Link>
            </li>
            <li
            className="nav-item"
            >
            <Link to="/blog/" className="nav-link" activeClassName="active">
            Blog 
            </Link>
            </li>
            <li
            className="nav-item"
            >
            <Link to="/kontakt" className="nav-link" activeClassName="active">
            Kontakt
            </Link>
            </li>
         </ul>
      </div>
   </div>
</nav>
  )}
}

export default Navbar
