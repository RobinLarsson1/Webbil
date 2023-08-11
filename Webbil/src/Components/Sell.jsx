import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactUs.css';

const Sell = () => {
	const form = useRef();
	const [messageSent, setMessageSent] = useState(false)
	const [formInvalid, setFormInvalid] = useState(false)

	const sendEmail = (e) => {
		e.preventDefault();

		const { user_name, user_mail, user_tel, car_reg, car_dist, message } = form.current;

		if ( 
			user_name.value.trim() === '' ||
			user_mail.value.trim() === '' ||
			user_tel.value.trim() === '' ||
			car_reg.value.trim() === '' ||
			car_dist.value.trim() === '' ||
			message.value.trim() === ''
		) {
			setFormInvalid(true); // Sätt formInvalid till true om formuläret är ogiltigt
			return;
		}

		emailjs.sendForm('service_xw1gn9k', 'template_w7jvv2l', form.current, '_LrA-8ZGZggnI0Tf5')
			.then((result) => {
				console.log(result.text);
				console.log('message sent')
				setMessageSent(true);
			}, (error) => {
				console.log(error.text);
			});
	};
	return (
		<section className="contact-us">
			<h1 className="contact-h1">Värderingsformulär</h1>
			<p className="contact-p">1. Fyll i formuläret</p>
			<p className="contact-p">2. Vi kontaktar dig för ett schysst bud samma dag</p>
			<p className="contact-p">3. Du väljer om du vill gå vidare och då köper vi din bil, snabbt och tryggt hemma hos dig eller om du väljer att lämna den till vår depå i Karlstad.</p>
			
			{messageSent ? (
				<p className="confirmation-text">Meddelande skickat!</p>
			) : (
				<form ref={form} onSubmit={sendEmail} className="contact-form">
					<div className="input-group">
						<div className="name">
							<label>För och efternamn <span className='required'>*</span></label>
							<input type="text" name="user_name" className="namn" />
						</div>
						<div className="mejl">
							<label>Reg-nummer <span className='required'>*</span></label>
							<input type="text" name="car_reg" className="reg" placeholder='ABC-123' />
						</div>
					</div>
					<label>Mätarställning <span className='required'>*</span></label>
					<input type="text" name="car_dist" className="phone" />
					<div className="input-group">
					<div className="name">
						<label>Mobilnummer <span className='required'>*</span></label>
						<input type="text" name="user_tel" className="namn" />
						</div>
						<div className="mejl">
						<label>E-postadress <span className='required'>*</span></label>
						<input type="email" name="user_mail" className="phone" placeholder='exempel@mail.se'/>
						</div>
						</div>
					<label>Meddelande (fyll i om det finns några defeketer eller liknande) <span className='required'>*</span></label>
					<textarea name="message" className='txt-area'/>
					{formInvalid && (
						<div className="error-div">
						<p className="error-text">Vänligen fyll i alla obligatoriska fält innan du skickar meddelandet.</p>
						</div>
					)}
					<div className="form-btn-div">
					<input type="submit" value="Skicka meddelande" className="contact-btn" />
					</div>
				</form>
			)}
		</section>
	);
};

export default Sell