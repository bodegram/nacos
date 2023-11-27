import React from "react";
import "./stepTwo.css";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useDispatch, useSelector } from "react-redux";
import { duePaymentAsync, verifyPaymentAsync } from "../../redux/paymentSlice";
import Preview from "./preview";
import { Link } from "react-router-dom";
import Progress from "../progress";
import { toast } from "react-toastify";

export default function StepTwo({ values, onChange, prev }) {
  const dispatch = useDispatch();

  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: values.amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: values.email,
      phone_number: values.phoneno,
      name: values.name,
    },
    customizations: {
      title: "Nacos Due",
      description: "Payment for Nacos due",
      logo: require("../../assets/images/nacoss-logo.jpg"),
    },
  };

  const handleFlutterPayment = useFlutterwave(config);



  return (
    <>
    <Progress  percentage='60%' current='2' last='3'/>
    <div className="two">
      <div className="two-content">
        <div className="two-header">
          <h3>Nacos Due</h3>
          <p>Click on the pay button to make payment</p>
        </div>
        <div className="two-body">
          <div>
            <div>Amount: NGN {values.amount}</div>
          </div>
          <div className="two-buttons">
            <button className="prev-btn" onClick={prev}>Go Back</button>
            <button
              className="continue-btn"
              onClick={() => {
                handleFlutterPayment({
                  callback: (response) => {
                    //console.log(response.tx_ref);
                    dispatch(
                      duePaymentAsync({
                        level: values.level,
                        amount: values.amount,
                        phoneno: values.phoneno,
                        department: values.department,
                        matricno: values.matricno,
                        email: values.email,
                        name: values.name,
                        ref: response.tx_ref,
                      })
                    );
                    toast.success('Step two completed')
                    onChange({ ref: response.tx_ref });

                    closePaymentModal(); // this will close the modal programmatically
                  },
                  onClose: () => {},
                });
              }}
            >
              Pay NGN {values.amount}
            </button>
          </div>
        </div>
      </div>
      <div>
        <Preview
         amount={values.amount}
         name={values.name}
         matricno={values.matricno}
         level={values.level}
         department={values.department}
         email={values.email}
         phoneno={values.phoneno}
        />
      </div>
    </div>
    </>
  );
}
