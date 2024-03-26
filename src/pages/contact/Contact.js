import React from "react";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <main className="space-y-16 pb-32">
      <div className="grid place-content-center gap-4">
        <h1 className="mx-auto text-gradient-horizontal font-bold text-3xl">
          Contact us
        </h1>
        <h2 className="text-center font-bold text-4xl">
          Join our mission to make asset <br />
          management more efficient
        </h2>
      </div>
      <ContactForm></ContactForm>
    </main>
  );
};

export default Contact;
