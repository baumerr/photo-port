import React from "react";

function ContactForm() {
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <input type="text" id="message" name="message" />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
