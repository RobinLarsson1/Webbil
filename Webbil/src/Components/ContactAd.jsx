import React from "react";
import '../styles/ContactAd.css';
import { TbMessageCircleQuestion } from 'react-icons/tb';
import { useNavigate } from "react-router-dom";

const ContactAd = () => {
    const navigate = useNavigate();

    const handleSpanClick = () => {
        navigate("/kontakt");
    };

    return (
        <section className="contact-ad-sect">
            <div className="div-ad">
                <TbMessageCircleQuestion className="question-icon"/>
                <h2 className="ad-h2">Har du frågor? <br /> Välkommen att kontakta oss!</h2>
                <p>
                    Kontakt sker via vårt{" "}
                    <span
                        className="kont-span"
                        role="link"
                        onClick={handleSpanClick}
                        tabIndex={0}
                    >
                        Kontaktformulär
                    </span>{" "}
                    eller direkt via E-mail
                </p>
            </div>
        </section>
    )
}

export default ContactAd;
