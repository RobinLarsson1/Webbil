import React from "react";
import '../styles/Selling.css';
import { useNavigate } from "react-router-dom";
import sellingImg from '../img/bil3-resize.jpeg'
const Selling = () => {
	const navigate = useNavigate();

	const handleSellButtonClick = () => {
		navigate("/salg")
	}


	return (
		<section className="sell-sect">
			<img src={sellingImg} alt="" className="selling-img" />
			<h1 className="sell-h1">Vi köper din person & transportsbil!</h1>
			<div className="sell-btn-div">
			<button className="sell-btn" onClick={handleSellButtonClick}>Till vårt säljformulär</button>
			</div>
		</section>
	)
}

export default Selling