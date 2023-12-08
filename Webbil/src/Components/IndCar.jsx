import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/IndCar.css'
import { LuFuel } from 'react-icons/lu';
import { PiRoadHorizonBold } from 'react-icons/pi';
import { PiCalendar } from 'react-icons/pi';
import { GiGearStickPattern } from 'react-icons/gi';
import { BsSpeedometer2 } from 'react-icons/bs';
import carData from "../Data/carData";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const IndCar = () => {
	const navigate = useNavigate();
	const { carIndex } = useParams();

    const handleSpanClick = () => {
        navigate("/kontakt");
    };

	const carInfo = carData[carIndex];

	return (
		<section className="ind-car-sect">
			<div className="ind-hero">
				<img src={carInfo.img} alt={carInfo.name} className="ind-car-img" />
				<h1 className="ind-h1">{carInfo.name}</h1>
				<p className="ind-p">{carInfo.price.toLocaleString()} kr</p>
				<p className="monthly">Finansiera från: {carInfo.monthly} kr/mån</p>
				<h2 className="ind-intr">Intresserad? Kontakta oss via vårt{" "}
                    <span
                        className="ind-span"
                        role="link"
                        onClick={handleSpanClick}
                        tabIndex={0}
                    >
                        Kontaktformulär
                    </span>{" "}
                </h2>
			</div>
			<hr className="hr-ind" />
			<h3 className="fact-h3">Fakta</h3>
			<div className="facts">
				<div className="fact-div">
					<LuFuel className="fact-icon" />
					<div className="fact-text">
						<p className="fuel-p">Bränsle:</p>
						<p>{carInfo.fuel}</p>
					</div>
				</div>
				<div className="fact-div">
					<PiRoadHorizonBold className="fact-icon" />
					<div className="fact-text">
						<p className="fact-p">Miltal:</p>
						<p>{carInfo.distance.toLocaleString()} mil</p>
					</div>
				</div>
				<div className="fact-div">
					<PiCalendar className="fact-icon" />
					<div className="fact-text">
						<p className="fact-p">Årsmodell:</p>
						<p>{carInfo.year}</p>
					</div>
				</div>
				<div className="fact-div">
					<GiGearStickPattern className="fact-icon" />
					<div className="fact-text">
						<p className="fact-p">Växellåda:</p>
						<p>{carInfo.gearbox}</p>
					</div>
				</div>
				<div className="fact-div">
					<BsSpeedometer2 className="fact-icon" />
					<div className="fact-text">
						<p className="fact-p">Hästkrafter:</p>
						<p>{carInfo.power}</p>
					</div>
				</div>
			</div>
			<hr className="hr-ind" />
			<div className="besk">
				<h2 className="besk-h2">Beskrivning</h2>
				<p className="besk-p">{carInfo.description}</p>
			</div>
			<Link to="/kontakt">
			<button className="ind-btn">Kontakta oss</button>
			</Link>
		</section>
	)
}

export default IndCar;
