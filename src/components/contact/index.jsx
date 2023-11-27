import React, { useState } from "react";
import "./contact.css";
import Nav from "../nav";
import Footer from "../footer";
import { useDispatch, useSelector } from "react-redux";
import { createContactAsync } from "../../redux/appSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";
import ContactImg from "../../assets/images/contact.svg";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.app);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      toast.error("Please enter your name");
    } else if (email === "") {
      toast.error("Please enter your email address");
    } else if (message === "") {
      toast.error("Please enter your message");
    } else {
      dispatch(createContactAsync({ name, email, message }));
      toast.success("Message sent");
      console.log("status", status);
    }
  };
  return (
    <>
      <Nav />
      <div className="contact-title">
            <h1>Contact Us</h1>
          </div>
      <div className="contact container">
        <div className="contact-header">
          <div className="contact-items">
            <div className="contact-card">
              <div className="contact-card-header">Address</div>
              <div className="contact-card-body">
                <div>
                  <FaLocationDot />
                </div>
                <div className="contact-card-body-title">Address</div>
                <div className="contact-text">
                  MP03 Computer Lab, Federal University of Agriculture, <br />{" "}
                  Abeokuta, Ogun State.
                </div>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-header">Call Now</div>
              <div className="contact-card-body">
                <div>
                  <FaPhone />
                </div>
                <div className="contact-card-body-title">Call to us</div>
                <div className="contact-text">09155104851</div>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-header">Emails us</div>
              <div className="contact-card-body">
                <div>
                  <FaEnvelope />
                </div>
                <div className="contact-card-body-title">Info Services</div>
                <div className="contact-text">nacosfunaab24@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-body">
          <div>
            <img src={ContactImg} alt="contact-image" className="contact-img" />
          </div>
          <form
            action=""
            className="contact-form"
            method
            onSubmit={handleSubmit}
          >
            <div className="contact-top">
              <h3>Send us a Feedback</h3>
            </div>
            <div className="contact-field">
              <input
                type="text"
                placeholder="Enter your Name"
                className="contact-form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="contact-field">
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="contact-form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contact-field">
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className="contact-form-control"
                placeholder="Type your message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button type="submit" className="contact-btn">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}
