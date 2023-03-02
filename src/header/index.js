import { useState } from "react";
import Logo from "../assets/logo_black.svg";
import "./index.css";
const Header = () => {
    const [showDropDown,setShowDropDown] = useState(false);
  return (
    <div className="header">
      <div className="header-container">
        <img className="header-logo" src={Logo} alt="#"/>
        <div className="header-nav-link-container">
          <span className="header-nav-link">
            SEMPLICE V6<sup className="header-new-superscript">NEW</sup>
          </span>
          <span className="header-nav-link">SHOWCASE</span>
          <span className="header-nav-link">FEATURES</span>
          <span className="header-nav-link">RESOURCES</span>
          <span className="header-nav-link header-dot-container">
            <span className="header-dot"></span>
            <span className="header-dot"></span>
            <span className="header-dot"></span>
          </span>
        </div>
        <div className="get-semplice">GET SEMPLICE</div>
        <div className="hamburger-container">
        {!showDropDown ? <span className="hamburger" onClick={()=>setShowDropDown(true)}>☰</span>
            :<span className="hamburger" onClick={()=>setShowDropDown(false)}>&#x2716;</span>}
            
        </div>
      </div>
     {showDropDown ? <div className="hamburger-dropdown">
        <span className="dropdown-list-items">Semplice v6</span>
        <span className="dropdown-list-items">Showcase</span>
        <span className="dropdown-list-items">Features</span>
        <span className="dropdown-list-items">Reviews</span>
        <span className="dropdown-list-items">Supply</span>
        <div className="get-semplice-dropdown">GET SEMPLICE</div>
      </div>:null}
    </div>
  );
};

export default Header;
