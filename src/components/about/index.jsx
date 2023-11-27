import React from "react";
import "./about.css";
import AboutImg from "../../assets/images/code.jpg";
import Nav from "../nav";
import Footer from "../footer";

export default function About() {
  return (
    <>
      <Nav />
      <div className="about-title">
        <h1>About Us</h1>
      </div>
      <div className="about container">
        <div className="about-img">
          <img src={AboutImg} alt="" />
        </div>
        <div className="about-content">
          <div className="about-top">About us</div>
          <div className="about-text">
            NACOS which stands for Nigeria Association of Computing
            Students(NACOS) formerly known as Nigeria Association of Computer
            Science Students(NACOSS) Students is one of the oldest associations
            in the Federal University of Agriculture, Abeokuta (FUNAAB). NACOS
            generally is one of the present association in most universities in
            Nigeria as a result of it's reputable standards and dedication by
            her leaders. This is expressed in her slogan "Towards Advanced
            Computing". The standards have been followed and improved upon from
            teams to teams in different institutions and collectively.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
