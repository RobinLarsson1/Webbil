import React, { useEffect, useState } from "react";
import Logo from '../img/logo.jpg';
import '../styles/Header.css';
import { useRecoilState } from "recoil";
import { isMobileState } from "../Data/atom.js";
import { RiMenu2Fill } from 'react-icons/ri';
import { AiOutlineCaretRight, AiOutlineClose } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { BsFacebook } from 'react-icons/bs';

const Header = () => {
	const [isMobile, setIsMobile] = useRecoilState(isMobileState);
	const [showOverlay, setShowOverlay] = useState(false);

	const toggleOverlay = () => {
		setShowOverlay(!showOverlay);
	};

	const handleResize = () => {
		setIsMobile(window.innerWidth <= 768);
	};

	window.addEventListener("resize", handleResize);

	useEffect(() => {
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<header className="header-main">
			<div className="logo-div">
			<Link to="/"><img src={Logo} alt="Logo" className="header-logo" /></Link>
			</div>
			{isMobile ? (
				<div className="menu-icon-div">
					{showOverlay ? (
						<AiOutlineClose className="menu-icon" onClick={toggleOverlay} />
					) : (
						<RiMenu2Fill className="menu-icon" onClick={toggleOverlay} />
					)}
				</div>
			) : (
				<div className="link-div">
					<ul className="links">
					<Link to="/bilarna" className="link">Köp bil</Link>
					<Link to="/salg" className="link">Sälj bil</Link>
					<Link to="/omoss" className="link">Om oss</Link>
					<Link to="/kontakt" className="link">Kontakt</Link>
					</ul>
				</div>
			)}
			{showOverlay && isMobile && (
				<div className="overlay">
					<ul className="mobile-links">
					<Link to="/bilarna" className="link" onClick={toggleOverlay}>Köp bil <AiOutlineCaretRight className="arrow-icon"/></Link>
					<Link to="/salg" className="link" onClick={toggleOverlay}>Sälj bil <AiOutlineCaretRight className="arrow-icon"/></Link>
					<Link to="/omoss" className="link" onClick={toggleOverlay}>Om oss <AiOutlineCaretRight className="arrow-icon"/></Link>
					<Link to="/kontakt" className="link" onClick={toggleOverlay}>Kontakt <AiOutlineCaretRight className="arrow-icon"/></Link>
					</ul>
					<div className="social-div">
						<p className="social-p">Besök oss på vår Facebook</p>
					<a href="https://www.facebook.com/profile.php?id=100083196975192" target="_blank" rel="noopener noreferrer"><BsFacebook className="fb-link-overlay" /></a>
					</div>
				</div>
			)}
		</header>
	)
}
export default Header;
