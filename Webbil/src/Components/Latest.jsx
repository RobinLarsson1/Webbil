import React from "react";
import { Link } from "react-router-dom";
import "../styles/Latest.css";
import { useNavigate } from "react-router-dom";
import blocketPng from "../img/blocket.png";

const Latest = () => {
  const navigate = useNavigate();

  // const latestCars = carData.slice(0, 3);

  //  const handleLinkClick = (index) => {
  // 	window.scrollTo(0, 0);
  //     navigate(`/indcar/${index}`); // Använd navigate här
  // };

  return (
    <section className="latest">
      <div className="blocket-div">
        <h1 className="latest-h1">Kolla in våra bilar på:</h1>{" "}
        <Link to="https://www.blocket.se/butik/webbil" target="_blank">
          <button className="latest-btn">
            <img src={blocketPng} alt="blocket png" className="blocket-img" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Latest;
