import React from "react";
import '../styles/Home.css';
import heroImg from '../img/solbild-resize.jpeg'
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate()

	const handleBuyButtonClick = () => {
		navigate("/bilarna")
	}

	const handleSellButtonClick = () => {
		navigate("/salg")
	}

	return (
		<section className="home">
			<img src={heroImg} alt="image of cars" className="hero-img" />
			<div className="welcome">
				<h4 className="hero-h4">Välkommen till Webbil!</h4>
				<h1 className="hero-h1">Köp & Sälj din företagsbil hos oss!</h1>
				<div className="btn-div">
					<button className="buy-sell-btn" onClick={handleBuyButtonClick}>Våra bilar</button>
					<button className="buy-sell-btn" onClick={handleSellButtonClick}>Sälj bil</button>
				</div>
			</div>
		</section>
	)
}

export default Home