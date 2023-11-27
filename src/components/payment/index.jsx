import React, { useState } from "react";
import "./payment.css";
import Nav from "../nav";
import Footer from "../footer";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Receipt from "./receipt";





export default function Payment({}) {
  const [step, setStep] = useState(4);
  const [values, setValues] = useState({
    level: "",
    matricno: "",
    name: "",
    phoneno: "",
    department: "",
    email: "",
    amount: "",
    ref: '',
  });
  const form = () => {
    switch (step) {
      case 1:
        return <StepOne onChange={onChange} values={values} />;

      case 2:
        return <StepTwo values={values} onChange={onChange} prev={prev} />;

      case 3:
        return <StepThree values={values} />

      case 4:
        return <Receipt values={values}/>

      

    }
  };

  const prev = () => {
    if (step === 1) {
      setStep(1);
    } else {
      setStep((step) => step - 1);
    }
  };

  const onChange = (item) => {
    const newValue = { ...values, ...item };
    setValues(newValue);
    setStep((step) => step + 1);
  };



  

  return (
    <>
      <Nav />
      <div className="pay container">
        <div className="pay-top">
          <h3>{step === 2 ? "Confirm your details" : "Make Payment"}</h3>
        </div>
        <div className="pay-body">{form()}</div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}
