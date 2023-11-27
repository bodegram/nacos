import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import NacosLogo from '../../assets/images/nacoss-logo.jpg'

export default function Nav() {
  const [nav, setNav] = useState(false);
  

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <nav>
      <div className="nav-brand">
       <img src={NacosLogo} className="nav-brand-img" alt="" />
       <div className="nav-brand-title">NACOS PAY</div>
      </div>
      <ul className={nav ? "nav-menu" : "nav-menu toggle-nav"}>
        <li className="nav-item close">
          <div className="close-btn" onClick={toggleNav}>
            Close{" "}
            <span className="close-icon">
              <FaTimes size={14} />
            </span>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/due" className="nav-link">
            Make Payment
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About Nacos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact us
          </Link>
        </li>
        <li className="nav-item nav-social">
          <a href="" className="nav-social-icon">
            <FaFacebook size={20} />
          </a>
          <a href="" className="nav-social-icon">
            <FaInstagram size={20} />
          </a>
          <a href="" className="nav-social-icon">
            <FaTwitter size={20} />
          </a>
          <a href="" className="nav-social-icon">
            <FaWhatsapp size={20} />
          </a>
          <a href="" className="nav-social-icon">
            <FaEnvelope size={20} />
          </a>
        </li>
      </ul>
      <div className="nav-btn">
        <span onClick={toggleNav}>
          {nav ?  <FaTimes size={25} /> :  <FaBars size={25} />}        
        </span>
      </div>
    </nav>
  );
}
