import React from 'react'
import './css/contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ept4jrj', 'template_sgumv5d', form.current, 'yb111x2EbsSb6qXAr')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
        <div className="title">
            <h1 className="section-header reveal">Contact <span>Me</span></h1>
            <p className="section-description reveal">Interested in collaborating with me? Get in touch by filling in the form or through my social medias</p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <label className="reveal">Name</label>
            <input className="reveal" type="text" name="from_name" />
            <label className="reveal">Email</label>
            <input className="reveal" type="email" name="user_email" />
            <label className="reveal">Message</label>
            <textarea className="reveal" name="message" />
            <input className="submit-btn reveal" type="submit" value="SEND" />
        </form>
    </section>
  );
}

export default Contact