import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormBody from "../components/contactuscomponent/formBody"; // Ensure proper casing

const ContactUScreen = () => {
  return (
    <div>
      <Header />
      <FormBody /> {/* Ensure proper casing */}
      <Footer /> {/* Ensure proper casing */}
    </div>
  );
};

export default ContactUScreen;
