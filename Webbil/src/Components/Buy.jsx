import React from "react";
import '../styles/Buy.css';
import Home from "./Home";
import { Link } from "react-router-dom";


const Buy = () => {
	return (
		<section className="buy-car-sect">
			 <Home />
			<div className="buy-text-div">
				<h1 className="buy-h1">Våra bilar</h1>
				<p className="buy-p">Är du intresserad av någon av bilarna så är du välkommen att kontakta oss via vårat <span>Kontaktformulär</span></p>
			</div>
				<Link to="/indcar" className="to-ind">
			<div className="car-card-div">
				<div className="car-card">
					<div className="car-text">
					<h2>Exempelbil 1.8 TFSI</h2>
					<p>2010 - 12000 mil - automat</p>
					<p><span>Pris: </span> 120 000 kr</p>
					</div>
					<img src="https://media.pvmagasinet.se/2019/01/Opel-Combo.jpg" alt="image of car" className="buy-car-img"/>
				</div>
			</div>
					</Link>
			<div className="car-card-div">
				<div className="car-card">
					<div className="car-text">
					<h2>Exempelbil 1.8 TFSI</h2>
					<p>2010 - 12000 mil - automat</p>
					<p><span>Pris: </span> 120 000 kr</p>
					</div>
					<img src="https://media.pvmagasinet.se/2019/01/Opel-Combo.jpg" alt="image of car" className="buy-car-img"/>
				</div>
			</div>
			<div className="car-card-div">
				<div className="car-card">
					<div className="car-text">
					<h2>Exempelbil 1.8 TFSI</h2>
					<p>2010 - 12000 mil - automat</p>
					<p><span>Pris: </span> 120 000 kr</p>
					</div>
					<img src="https://media.pvmagasinet.se/2019/01/Opel-Combo.jpg" alt="image of car" className="buy-car-img"/>
				</div>
			</div>
		</section>
	)
}

export default Buy