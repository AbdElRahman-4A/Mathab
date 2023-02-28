import React from "react";
import Hero from "../Hero/Hero";
import { AboutUs } from "../AboutUs/AboutUs";
import { ContactUs } from "../ContactUs/ContactUs";
import { Apartment } from "../Apartments/Apartment";

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Apartment />
      <ContactUs />
    </>
  );
};
