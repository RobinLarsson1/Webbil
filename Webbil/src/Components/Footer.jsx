import React from "react";
import '../styles/Footer.css';
import Logo from "../img/Loggautanbakgrund.png"
import { BiCopyright } from 'react-icons/bi';


const Footer = () => {
	return (
		<footer className="footer-sect">
			<div className="footer-div">
			<img src={Logo} alt="" className="footer-logo"/>
			</div>
			<div className="rights">
				<p className="rights-p"><BiCopyright /> 2023 Webbil Sweden AB - All rights reserved</p>
			</div>
		</footer>
	)
}

export default Footer