import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";

export default function Card({ title, text, name, icon}) {
    const navigate = useNavigate()
  return (
    <div className="card" onClick={navigate('/create/invoice')}>
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      <div className="card-text">{text}</div>
      
    </div>
  );
}
