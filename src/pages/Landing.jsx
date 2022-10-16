import React from "react";
import {
  Header,
  Slider,
  LuxuryPackages,
  BookWithUs,
  CustomiseTrip,
  Reviews,
  ContactsForm,
  Footer,
} from "../containers/index";

function Landing() {
  return (
    <>
      <Header />
      <Slider />
      <LuxuryPackages />
      <BookWithUs />
      <CustomiseTrip />
      <Reviews />
      <ContactsForm />
      <Footer />
    </>
  );
}

export default Landing;
