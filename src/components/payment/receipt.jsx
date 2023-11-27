import React from "react";
import "./receipt.css";
import Image from "../../assets/images/nacoss-logo.jpg";

export default function Receipt() {
  return (
    <>
      <div className="receipt">
        <div className="receipt-top">
          <div className="receipt-img">
            <img src={Image} alt="image" />
          </div>
          <div>
            <h3>NIGERIA ASSOCIATION OF COMPUTING STUDENTS (NACOS)</h3>
            <h4>Federal University of Agriculture, Abeokuta</h4>
          </div>
        </div>
        <div className="receipt-body">
           <div className="receipt-header">Departmental Due Receipt</div>
           <div>
            <div>Receipt to:</div>
            <div className="receipt-text">
                 <div>
                  <span className="receipt-text-title">Payer's Name: </span>
                  <span>Awofisan Samuel</span>
                 </div>
                 <div>
                  <span className="receipt-text-title">Payer's Email: </span>
                  <span>Awofisan Samuel</span>
                 </div>
                 <div>
                  <span className="receipt-text-title">Matric No: </span>
                  <span>Awofisan Samuel</span>
                 </div>
                 <div>
                  <span className="receipt-text-title">Academic Session: </span>
                  <span>Awofisan Samuel</span>
                 </div>
                 <div>
                  <span className="receipt-text-title">Level: </span>
                  <span>Awofisan Samuel</span>
                 </div>
                 <div>
                  <span className="receipt-text-title">Transaction Ref: </span>
                  <span>Awofisan Samuel</span>
                 </div>
                 <div>
                  <span className="receipt-text-title">Status: </span>
                  <span>Awofisan Samuel</span>
                 </div>
                 <div>
                  <span className="receipt-text-title">Amount: </span>
                  <span>Awofisan Samuel</span>
                 </div>
                 <div>
                  <span className="receipt-text-title">Date Paid: </span>
                  <span>Awofisan Samuel</span>
                 </div>
            </div>
            <div className="receipt-footer">
              <div>
                <div className="signature">Authorized Signature</div>
              </div>
            </div>
           </div>
        </div>
      </div>
    </>
  );
}
