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
    <section className="my-5">
      <div className="page-header">
        <h2>CONTACT ME</h2>
      </div>
      <div className="flex-row">
        <img
          src={contactImg}
          className="contact-img"
          style={{ width: "35%" }}
          alt="Envelope Line Art"
        />
      </div>

      <div className="flex-row">
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
      </div>
    </section>
  );
}

export default ContactForm;
