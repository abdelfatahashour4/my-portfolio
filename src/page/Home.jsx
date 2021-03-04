import React from "react";
import { ContactUs } from "../component/ContactUs/ContactUs";
import Main from "../component/main/Main";
import { Navbar } from "../component/navbar/Navbar";
import OurProjects from "../component/OurProjects/OurProjects";
import { Technologies } from "../component/section_technologies/Technologies";
import Services from "../component/services/Services";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Technologies />
      <Services />
      <OurProjects />
      <ContactUs />
    </div>
  );
}
