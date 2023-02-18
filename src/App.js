import React from "react";

import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import { Navbar } from "./components";

import "./App.scss";
import Education from "./container/Education/Education";
import Creative from "./container/Creative/Creative";
import Certificates from "./container/Certificates/Certificates";
import Infographic from "./container/Infographic/Infographic";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Education />
      <Work />
      <Creative />
      <Certificates />
      <Skills />
      <Infographic />
      <Testimonials />
      <Footer />
    </div>
  );
};
export default App;
