import React from "react";
// import { validateEmail } from "../assets/utils/helpers.js";
import { useForm, ValidationError } from "@formspree/react";
import contactImg from "../assets/cover/contact.jpg";

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
    return (
      <p className="thank-you-message">
        Thanks for your message! I will respond at my earliest convenience. Have
        a great day!
      </p>
    );
  }

  return (
    <section>
      <div className="contact-header">
        <img
          src={contactImg}
          className="contactImg"
          style={{ width: "40%" }}
          alt="headshot"
        />
        <h1>Contact Me</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="name" name="name" />
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
