import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container">
      <div className="footer-top">
        <div className="footer-items">
          <div className="footer-items-top">About Nacos</div>
          <div className="footer-items-body footer-about-text">
            NACOS stands for Nigeria Association of Computing
            Students(NACOS) formerly known as Nigeria Association of Computer
            Science Students(NACOSS) Students. This is
            expressed in her slogan "Towards Advanced Computing". The standards
            have been followed and improved upon from teams to teams in
            different institutions and collectively.
          </div>
        </div>
        <div className="footer-items">
          <div className="footer-items-top">Quick Links</div>
          <div className="footer-items-body">
            <div className="footer-item">
              <div className="footer-item-link">
                <Link className="footer-link">Home</Link>
              </div>
              <div className="footer-item-link">
                <Link className="footer-link">Make Payment</Link>
              </div>
              <div className="footer-item-link">
                <Link className="footer-link">About us</Link>
              </div>
              <div className="footer-item-link">
                <Link className="footer-link">Contacts</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-items">
          <div className="footer-items-top">Nacos</div>
          <div className="footer-items-body">
            <div className="footer-item">
              <div className="footer-item-link">
                <Link className="footer-link">Blog</Link>
              </div>
              <div className="footer-item-link">
                <Link className="footer-link">FAQs</Link>
              </div>
              <div className="footer-item-link">
                <Link className="footer-link">Terms and Conditions</Link>
              </div>
              <div className="footer-item-link">
                <Link className="footer-link">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          © Copyright 2024. All Rights Reserved | Nacos Funaab
        </div>
        <div className="footer-social">
          <a href="" className="social-icon">
            <FaFacebook size={20} />
          </a>
          <a href="" className="social-icon">
            <FaInstagram size={20} />
          </a>
          <a href="" className="social-icon">
            <FaTwitter size={20} />
          </a>
          <a href="" className="social-icon">
            <FaWhatsapp size={20} />
          </a>
          <a href="" className="social-icon">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
