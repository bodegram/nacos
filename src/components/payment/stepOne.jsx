import React, { useEffect, useState } from "react";
import "./stepOne.css";
import Preview from "./preview";
import Progress from "../progress";
import {  toast } from "react-toastify";


export default function StepOne({ onChange, values }) {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [matricno, setMatricno] = useState("");
  const [level, setLevel] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    if (level === "100L") {
      setAmount("4500");
    } else if (level === "200L") {
      setAmount("2000");
    } else if (level === "300L") {
      setAmount("2000");
    } else if (level === "D.E") {
      setAmount("4500");
    } else if (level === "400L") {
      setAmount("2000");
    }
  }, [level]);

  useEffect(()=>{
    setAmount(values.amount)
    setName(values.name)
    setEmail(values.email)
    setMatricno(values.matricno)
    setLevel(values.level)
    setPhoneno(values.phoneno)
    setDepartment(values.department)
  }, [values])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (matricno == "") {
      toast.error("Matric number field is blank!");
    } else if (phoneno === "") {
      toast.error("Phone number field is blank!");
    } else if (email === "") {
      toast.error("Email field is blank!");
    } else if (level === "") {
     toast.error("Please choose your level!");
    } else if (department === "") {
      toast.error("Please choose your department!");
    } else {
      toast.success('Step one completed')
      onChange({
        level: level,
        matricno: matricno,
        name: name,
        phoneno: phoneno,
        department: department,
        email: email,
        amount: amount,
      });
    }
  };

  return (
  <>
    <Progress percentage='30%' current='1' last='3'/>
    <div className="one">
      <div className="one-header">
        <div className="one-header-top">
          <h3>Nacos Due</h3>
          <p>
            Provide all requested details to pay Nacos due
          </p>
        </div>
        <form
          action=""
          className="one-form"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="input-field">
            <label htmlFor="">Fullname</label>
            <br />
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
             
            />
          </div>
          <div className="input-field">
            <label htmlFor="">Matric number</label>
            <br />
            <input
              type="text"
              maxLength={8}
              className="form-control"
              onChange={(e) => setMatricno(e.target.value)}
              value={matricno}
             
            />
          </div>
          <div className="input-field">
            <label htmlFor="">Phone number</label>
            <br />
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPhoneno(e.target.value)}
              value={phoneno}
              
            />
          </div>
          <div className="input-field">
            <label htmlFor="">Email Address</label>
            <br />
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
             
            />
          </div>
          <div className="input-field">
            <label htmlFor="">Select your level</label>
            <br />
            <select
              name=""
              onChange={(e) => setLevel(e.target.value)}
              className="form-control"
              value={level}
              
            >
              <option value="">----</option>
              <option value="100L">100L</option>
              <option value="200L">200L</option>
              <option value="D.E">200L (D.E)</option>
              <option value="300L">300L</option>
              <option value="400L">400L</option>
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="">Select your department</label>
            <br />
            <select
              name=""
              id=""
              onChange={(e) => setDepartment(e.target.value)}
              className="form-control"
              value={department}
             
            >
              <option value=""  >----</option>
              <option value="Computer science">Computer Science</option>
            </select>
          </div>
          <button type="submit" className="pay-btn">
            PROCEED
          </button>
        </form>
      </div>
      <div className="phone">
        <Preview
         amount={amount}
         name={name}
         matricno={matricno}
         level={level}
         department={department}
         email={email}
         phoneno={phoneno}   
        />
      </div>
    </div>
  </>
  );
}
