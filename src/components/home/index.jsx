import React, { useState, useEffect } from "react";
import Nav from "../nav";
import Footer from "../footer";
import "./home.css";
import {
  FaRegCheckCircle,
  FaRegCheckSquare,
  FaTimes,
  FaTelegramPlane,
  FaFileInvoice,
  FaDownload,
  FaMoneyBill,
  FaHandHoldingUsd
  
} from "react-icons/fa";
import Img from "../../assets/images/img.svg";
import Card from "../card";
import GoogleImg from "../../assets/images/google-logo.png";
import FluuterwaveImg from "../../assets/images/flutterwave-logo.svg";



export default function Home() {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Nav />
      <div className="hero container">
        <div className="hero-content">
          <div className="hero-top">
            <h1>Easy Payment, Secure Payment</h1>
          </div>
          <div className="hero-text">
            Higher Institution Dues Payment Done Securely, Easily and
            Efficiently.
          </div>
          <div className="hero-download">
            <FaRegCheckCircle size={30} color="green" />
            <a onClick={showModal} className="download-receipt">
              DOWNLOAD RECEIPT
            </a>
          </div>
          <div className="hero-footer">
            <div className="hero-footer-top">Supported Payment methods</div>
            <div className="hero-footer-body">
              <div className="hero-footer-item">
                <div>
                  <span>
                    <FaRegCheckSquare size={15} color="black" />
                  </span>{" "}
                  Debit Cards
                </div>
              </div>
              <div className="hero-footer-item">
                <div>
                  <span>
                    <FaRegCheckSquare size={15} color="black" />
                  </span>{" "}
                  Mobile Money
                </div>
              </div>
              <div className="hero-footer-item">
                <div>
                  <span>
                    <FaRegCheckSquare size={15} color="black" />
                  </span>{" "}
                  Bank Transfer
                </div>
              </div>
              <div className="hero-footer-item">
                <div>
                  <span>
                    <FaRegCheckSquare size={15} color="black" />
                  </span>{" "}
                  USSD
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={Img} alt="" />
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div className="modal-card">
            <div className="modal-card-top">
              <div> Please enter your Invoice Pin/Matric No/Email Address</div>
              <div className="modal-times">
                <FaTimes size={20} onClick={showModal} />
              </div>
            </div>
            <div className="modal-card-body">
              <form action="" method="post">
                <label htmlFor="">Invoice Pin/Matric No:</label>
                <br />
                <input
                  type="text"
                  className="modal-input"
                  placeholder="Enter Invoice Pin or Matric No or Email Address"
                  id=""
                />
                <button type="submit" className="modal-btn">
                  Proceed <FaTelegramPlane size={13} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="payment container">
        <div className="payment-header">
          <h3>What are you paying for?</h3>
        </div>
        <div className="payment-body">
          <Card
            icon={<FaMoneyBill size={25} />}
            name='/create/invoice'
            title="NACOS Fee"
            text="Click and fill up the payment form displayed next to pay Nacos Dues."
          />
           <Card
            icon={<FaFileInvoice size={25} />}
            title="Pay Invoice"
            text="Click the icon above and supply your generated invoice PIN to complete payment."
          />
           <Card
            icon={<FaDownload size={25} />}
            title="Download Receipt"
            text="Click and supply your generated invoice PIN to print payment receipt."
          />
           <Card
            icon={<FaHandHoldingUsd size={25} />}
            title="Donation"
            text="Click and fill up the payment form displayed next to donate."
          />
        </div>
      </div>
      <div className="trust container">
         <div className="trust-top">
            <h3>We are trusted by</h3>
         </div>
         <div className="trust-body">
            <img src={GoogleImg} className="google-img" alt="" />
            <img src={FluuterwaveImg} className="flutterwave-img" alt="" />
         </div>
      </div>
      <Footer />
    </>
  );
}
