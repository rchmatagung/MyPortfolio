// import React from "react";
import "./contact.css";
import {MdOutlineMail} from "react-icons/md";
import {BsLinkedin} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aipvr1d', 'template_aujql6n', form.current, '7uYPEueGWiQOlX7rt')

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__icon" />
            <h4>Email</h4>
            <h5>rachmatagung003691@gmail.com</h5>
            <a href="mailto:rachmatagung003691@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__icon" />
            <h4>LinkedIn</h4>
            <h5>Rachmat Agung Ananda</h5>
            <a href="https://www.linkedin.com/in/rachmat-agung-ananda-013725173/" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4>Whatsapp</h4>
            <h5>+6285709255513</h5>
            <a href="https://api.whatsapp.com/send?phone=6285709255513" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email Address" required />
          <textarea name="message" rows="7" placeholder="Your Message Here"></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
