import React from "react";
import "./preview.css";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { FaUser } from "react-icons/fa6";

export default function Preview({
  amount,
  name,
  matricno,
  phoneno,
  email,
  department,
  level,
  prevAmount
}) {
  return (
    <DeviceFrameset device="Samsung Galaxy S5" color="black" width={300}>
      <div className="preview">
        <div className="top">
          <h3>Nacos Pay</h3>
        </div>
        <div className="body">
          <div className="user">
            <div>
              <FaUser className="user-icon" />
            </div>
            <p>{name}</p>
          </div>
          <div className="content">
            {
                name &&(
                    <div className="content-item">
              <p className="content-title">Name</p>
              <p>{name}</p>
            </div>
                )
            }
           {
            matricno &&(
                <div className="content-item">
                <p className="content-title">Matric number</p>
                <p>{matricno}</p>
              </div>
            )
           }
           {
            phoneno &&(
                <div className="content-item">
                <p className="content-title">Phone number</p>
                <p> {phoneno}</p>
              </div>
            )
           }
           {
            email && (
                <div className="content-item">
                <p className="content-title">Email Address</p>
                <p>{email}</p>
              </div>
            )
           }
          {
            level &&(
                <div className="content-item">
                <p className="content-title">Level</p>
                <p>{level}</p>
              </div>
            )
          }
           {
            department && (
                <div className="content-item">
                <p className="content-title">Department</p>
                <p> {department}</p>
              </div>
            )
           }
           {
            amount && (
                <div className="content-item">
                <p className="content-title">Amount</p>
                <p>NGN {amount}</p>
              </div>
            )
           }
          </div>
          <div className="footer">
           {
            amount && (
                <button className="preview-btn">Pay NGN {amount}</button>
            )
           }
          </div>
        </div>
      </div>
    </DeviceFrameset>
  );
}
