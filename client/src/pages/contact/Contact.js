import React from 'react';
import ContactForm from './components/ContactForm';

const Contact = () => {
  return (
    <main className="space-y-16 pb-32">
      <div className="grid place-content-center gap-4">
        <h1 className="text-gradient-horizontal mx-auto text-3xl font-bold">
          Contact us
        </h1>
        <h2 className="text-center text-4xl font-bold">
          Join our mission to make asset <br />
          management more efficient
        </h2>
      </div>
      <ContactForm></ContactForm>
    </main>
  );
};

export default Contact;
