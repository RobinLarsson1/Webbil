import React, { useEffect, useState } from "react";
import Logo from "../img/Loggautanbakgrund.png";
import "../styles/Header.css";
import { useRecoilState } from "recoil";
import { isMobileState } from "../Data/atom.js";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineCaretRight, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";

const Header = () => {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);
  const [showOverlay, setShowOverlay] = useState(false);
  const [lastClickedLink, setLastClickedLink] = useState(null);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
    document.body.style.overflow = showOverlay ? "auto" : "hidden";
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleLinkClick = (link) => {
    setLastClickedLink(link);
    toggleOverlay();
  };
  const handleLogoClick = () => {
    setLastClickedLink(null);
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
        <NavLink to="/" activeClassName="active-link">
          <img
            src={Logo}
            alt="Logo"
            className="header-logo"
            onClick={handleLogoClick}
          />
        </NavLink>
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
            <NavLink
              to="/bilarna"
              className={`link ${
                lastClickedLink === "/bilarna" ? "active-link" : ""
              }`}
              onClick={() => handleLinkClick("/bilarna")}
            >
              Våra bilar
            </NavLink>
            <NavLink
              to="/salg"
              className={`link ${
                lastClickedLink === "/salg" ? "active-link" : ""
              }`}
              onClick={() => handleLinkClick("/salg")}
            >
              Sälj bil
            </NavLink>
            <NavLink
              to="/omoss"
              className={`link ${
                lastClickedLink === "/omoss" ? "active-link" : ""
              }`}
              onClick={() => handleLinkClick("/omoss")}
            >
              Om oss
            </NavLink>
            <NavLink
              to="/kontakt"
              className={`link ${
                lastClickedLink === "/kontakt" ? "active-link" : ""
              }`}
              onClick={() => handleLinkClick("/kontakt")}
            >
              Kontakt
            </NavLink>
          </ul>
        </div>
      )}
      {showOverlay && isMobile && (
        <div className="test">
          <div className="overlay">
            <ul className="mobile-links">
              <NavLink
                to="/bilarna"
                className={`link ${
                  lastClickedLink === "/bilarna" ? "active-link" : ""
                }`}
                onClick={() => handleLinkClick("/bilarna")}
              >
                Köp bil <AiOutlineCaretRight className="arrow-icon" />
              </NavLink>
              <NavLink
                to="/salg"
                className={`link ${
                  lastClickedLink === "/salg" ? "active-link" : ""
                }`}
                onClick={() => handleLinkClick("/salg")}
              >
                Sälj bil <AiOutlineCaretRight className="arrow-icon" />
              </NavLink>
              <NavLink
                to="/omoss"
                className={`link ${
                  lastClickedLink === "/omoss" ? "active-link" : ""
                }`}
                onClick={() => handleLinkClick("/omoss")}
              >
                Om oss <AiOutlineCaretRight className="arrow-icon" />
              </NavLink>
              <NavLink
                to="/kontakt"
                className={`link ${
                  lastClickedLink === "/kontakt" ? "active-link" : ""
                }`}
                onClick={() => handleLinkClick("/kontakt")}
              >
                Kontakt <AiOutlineCaretRight className="arrow-icon" />
              </NavLink>
            </ul>
            <div className="social-div">
              <p className="social-p">Besök oss på vår Facebook</p>
              <a
                href="https://www.facebook.com/profile.php?id=100083196975192"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook className="fb-link-overlay" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
