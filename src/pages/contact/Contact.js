import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <main>
      <div className="grid place-content-center my-20">
        <h1 className="text-center text-gradient-horizontal font-bold text-3xl">
          Contact us
        </h1>
        <h2 className="text-center font-bold text-4xl">
          Join our mission to make waste <br />
          management more efficient
        </h2>
      </div>
      <ContactForm></ContactForm>;
    </main>
  );
};

export default Contact;
