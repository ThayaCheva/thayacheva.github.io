import React from "react";
import "./css/contact.css";
import emailjs from "@emailjs/browser";

function Contact(props) {
  const form = React.useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const message = formData.get("message");
    formData.append(
      "from_name",
      formData.get("first_name") + " " + formData.get("last_name")
    );
    if (
      formData.get("from_name") !== "" &&
      formData.get("user_email") !== "" &&
      message !== ""
    ) {
      emailjs
        .sendForm(
          "service_ept4jrj",
          "template_sgumv5d",
          form.current,
          "yb111x2EbsSb6qXAr"
        )
        .then(
          (result) => {
            props.manageAlert("Email Sent!", "success");
            console.log(result.text);
          },
          (error) => {
            props.manageAlert("Something went wrong", "fail");
            console.log(error.text);
          }
        );
      form.current.reset();
    } else {
      props.manageAlert("Fill in fields", "fail");
    }
  };

  return (
    <section id="contact">
      <div className="contact-container website-styling reveal">
        <div className="tab-btns">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="tab-bar">
          <p>contact.me</p>
        </div>
        {window.innerWidth >= 1024 && (
          <div className="contact-header">
            <h2 className="">
              Contact <span>Me</span>
            </h2>
            <p className="">
              Interested in collaborating with me? Get in touch by filling in
              the form or through my social medias
            </p>
            <img src={require("./images/icons/email-icon.PNG")}></img>
          </div>
        )}
        <form className="reveal" ref={form} onSubmit={sendEmail}>
          <input
            className="reveal"
            type="text"
            name="from_name"
            required
            placeholder="Insert Full Name"
          />
          <input
            className="reveal"
            type="email"
            name="user_email"
            required
            placeholder="Insert Email"
          />
          <textarea
            className="reveal"
            name="message"
            required
            placeholder="Insert You Message"
          />
          <input className="submit-btn reveal" type="submit" value="SEND" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
