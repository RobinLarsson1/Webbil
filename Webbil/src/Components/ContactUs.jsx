import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import omOssImg from '../img/omossimg.jpeg'

const ContactUs = () => {
	const form = useRef();
	const [messageSent, setMessageSent] = useState(false);
	const [formInvalid, setFormInvalid] = useState(false); // Lägg till formInvalid state

	const sendEmail = (e) => {
		e.preventDefault();

		const { user_name, user_email, user_phone, message } = form.current;

		if (
			user_name.value.trim() === '' ||
			user_email.value.trim() === '' ||
			user_phone.value.trim() === '' ||
			message.value.trim() === ''
		) {
			setFormInvalid(true); // Sätt formInvalid till true om formuläret är ogiltigt
			return;
		}

		emailjs.sendForm('service_xw1gn9k', 'template_yzcue7o', form.current, '_LrA-8ZGZggnI0Tf5')
			.then((result) => {
				console.log(result.text);
				console.log('message sent');
				setMessageSent(true);
			})
			.catch((error) => {
				console.log(error.text);
			});
	};

	return (
		<section className="contact-us">
			<div className="about-img-container">
                <img src={omOssImg} alt="about-us-image" className="contact-img" />
            </div>
			<div className="contact-us-div">
			<h1 className="contact-h1">Kontakta oss</h1>
			<p className="contact-p">Fyll i formuläret så hör vi av oss!</p>
			{/* Visa bekräftelsemeddelandet om meddelandet har skickats */}
			{messageSent ? (
				<div className="msg-sent">
					<p className="confirmation-text">Meddelande skickat!</p>
				</div>
			) : (
				<form ref={form} onSubmit={sendEmail} className="contact-form">
					<div className="input-group">
						<div className="name">
							<label>För och efternamn <span className='required'>*</span></label>
							<input type="text" name="user_name" className="namn" />
						</div>
						<div className="mejl">
							<label>Email <span className='required'>*</span></label>
							<input type="email" name="user_email" className="email" placeholder='exempel@mail.se' />
						</div>
					</div>
					<div className="input-group">
						<div className="phone">
							<label>Mobilnummer <span className='required'>*</span> </label>
							<input type="text" name="user_phone" className="phone" />
						</div>
					</div>
					<label>Meddelande <span className='required'>*</span></label>
					<textarea name="message" className='txt-area' />
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
			</div>
		</section>
	);
};


export default ContactUs