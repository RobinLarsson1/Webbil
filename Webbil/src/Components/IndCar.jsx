import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/IndCar.css'
import { LuFuel } from 'react-icons/lu';
import { PiRoadHorizonBold } from 'react-icons/pi';
import { PiCalendar } from 'react-icons/pi';
import { GiGearStickPattern } from 'react-icons/gi';
import { BsSpeedometer2 } from 'react-icons/bs';




const IndCar = () => {
	const navigate = useNavigate();

    const handleSpanClick = () => {
        navigate("/kontakt");
    };

	return (
		<section className="ind-car-sect">
			<div className="ind-hero">
				<img src="https://media.pvmagasinet.se/2019/01/Opel-Combo.jpg" alt="" className="ind-car-img" />
				<h1 className="ind-h1">Exempelbil 1.8 TFSI</h1>
				{/* <h3 className="ind-h3">2010 - 12000 mil - automat</h3> */}
				<p className="ind-p">120 000 kr</p>
				<p className="monthly">Finansiera från: 1950 kr/mån</p>
				<h2 className="ind-intr">Intresserad? Kontakta oss via vårt{" "}
                    <span
                        className="ind-span"
                        role="link"
                        onClick={handleSpanClick}
                        tabIndex={0}
                    >
                        Kontaktformulär
                    </span>{" "}</h2>
			</div>
			<hr className="hr-ind" />
				<h3 className="fact-h3">Fakta</h3>
			<div className="facts">
				<div className="fact-div">
					<LuFuel className="fact-icon" />
					<div className="fact-text">
						<p className="fuel-p">Bränsle:</p>
						<p>Bensin</p>
					</div>
				</div>
				<div className="fact-div">
					<PiRoadHorizonBold className="fact-icon" />
					<div className="fact-text">
						<p className="fact-p">Miltal:</p>
						<p>12 000</p>
					</div>
				</div>
				<div className="fact-div">
					<PiCalendar className="fact-icon" />
					<div className="fact-text">
						<p className="fact-p">Årsmodell</p>
						<p>2010</p>
					</div>
				</div>
				<div className="fact-div">
				<GiGearStickPattern className="fact-icon" />
					<div className="fact-text">
						<p className="fact-p">Växellåda</p>
						<p>Manuell</p>
					</div>
				</div>
				<div className="fact-div">
				<BsSpeedometer2 className="fact-icon" />
					<div className="fact-text">
						<p className="fact-p">Hästkrafter:</p>
						<p>165</p>
					</div>
				</div>
			</div>
			<hr className="hr-ind" />
			<div className="besk">
				<h2 className="besk-h2">Beskrivning</h2>
				<p className="besk-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorem iusto quibusdam quod dignissimos magnam repellat similique sint, sed pariatur? Aspernatur dolore enim fuga doloremque nulla quasi, explicabo dignissimos delectus!
				Enim voluptates maxime expedita ipsam suscipit? Id a doloremque deserunt architecto. Tempore delectus, minima culpa soluta ipsa saepe iure asperiores similique eos aspernatur inventore impedit dolorum illum, mollitia in cupiditate? <br />
				<br />
				Laboriosam incidunt voluptate minima numquam, reiciendis soluta dolores aspernatur vel corporis cupiditate dolor, neque sint, nam iste enim quas possimus ullam asperiores ipsam quae optio atque temporibus! Incidunt, iure magnam.</p>
			</div>
			<button className="ind-btn">Kontakta oss</button>
		</section>
	)
}

export default IndCar