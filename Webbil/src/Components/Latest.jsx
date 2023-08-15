import React from "react";
import '../styles/Latest.css';
import bil1 from "../img/bil1.jpeg"

const Latest = () => {
	return (
		<section className="latest">
			<h1 className="latest-h1">
				Senaste bilarna på lager
			</h1>
			<div className="latest-cars">
				<div className="latest-card">
					<img src="https://media.pvmagasinet.se/2019/01/Opel-Combo.jpg" alt="" className="latest-img" />
					<p className="latest-text">Exempelbil 1.8 TFSI</p>
					<p className="latest-text">120 000 kr</p>
					<p className="latest-text">2010 - 12000 mil - automat</p>
				</div>
				<div className="latest-card">
					<img src="https://media.pvmagasinet.se/2019/01/Opel-Combo.jpg" alt="" className="latest-img" />
					<p className="latest-text">Exempelbil 1.8 TFSI</p>
					<p className="latest-text">120 000 kr</p>
					<p className="latest-text">2010 - 12000 mil - automat</p>
				</div>
				<div className="latest-card">
					<img src="https://media.pvmagasinet.se/2019/01/Opel-Combo.jpg" alt="" className="latest-img" />
					<p className="latest-text">Exempelbil 1.8 TFSI</p>
					<p className="latest-text">120 000 kr</p>
					<p className="latest-text">2010 - 12000 mil - automat</p>
				</div>
			</div>
				<button className="all-cars-btn">Alla våra bilar</button>
		</section>
	)
}

export default Latest