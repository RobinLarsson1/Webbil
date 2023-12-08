import React from "react";
import "../styles/Buy.css";
import Home from "./Home";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import blocketPng from "../img/blocket.png";
import buyBackground from "../img/bil3-resize.jpeg";

const Buy = () => {
  const navigate = useNavigate(); // Använd useNavigate för att skapa navigate-funktionen

  // Uppdaterad handleLinkClick-funktion med index-parameter
  const handleLinkClick = (index) => {
    window.scrollTo(0, 0);
    navigate(`/indcar/${index}`); // Använd navigate här
  };

  return (
    <section className="buy-car-sect">
      <div className="buy-div">
        {" "}
        <h1 className="buy-h1">Hitta din nästa företagsbil på</h1>
        <Link to="https://www.blocket.se/butik/webbil" target="_blank">
          <button className="latest-btn">
            <img src={blocketPng} alt="blocket png" className="blocket-img" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Buy;
