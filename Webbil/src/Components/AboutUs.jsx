import React from "react";
import omOssImg from '../img/omossimg.jpeg'
import '../styles/about.css'
import { BsFacebook } from 'react-icons/bs';




const AboutUs = () => {
    return (
        <section className="about">
            <div className="about-img-container">
                <img src={omOssImg} alt="about-us-image" className="about-img" />
            </div>
            <div className="about-content">
                <div className="about-head">
                    <h1 className="about-h1">Om <span className="about-span">Webbil</span></h1>
                    <p className="about-p">Din nya lokala bilfirma i Karlstad</p>
                </div>
                <div className="under-head">
                    <div className="text-div">
                        <h1 className="under-h1">Om oss på webbil</h1>
                        <p className="under-p">På Webbil har vi stor passion för bilar och arbetsbilar  vi tror på personliga och genuina kundrelationer. Få hjälp av våra bilförsäljare med att hitta rätt fordon utifrån dina personliga behov och önskemål, och känn tryggheten i att vi finns kvar som en partner efter köpet.</p>
                        <p className="under-p">Vår depå i Karlstad finns ett stort lager av leveransklara nyare och begagnade bilar. Dessa är alla noggrant kontrollerade innan leverans.
                            De är också alltid rekonditionerade så vi kan lämna ut en fräsch begagnad bil till er.</p>
                        <p className="under-p">Vårt mål är att leverera fordon till våra kunder med eller utan hemleverans och som kan bli nöjda under en lång tid!</p>
                    </div>
                    <p className="fb-p">Besök oss på Facebook</p>
                    <a href="https://www.facebook.com/profile.php?id=100083196975192" target="_blank" rel="noopener noreferrer"><BsFacebook className="fb-link" /></a>
                </div>
            </div>
        </section>
    )
}




export default AboutUs