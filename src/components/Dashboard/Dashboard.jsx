import React, { Component } from "react";
import LandingPage from "../landingPage";
import Gallery from "../gallery";
import About from "../about";
import { Helmet } from "react-helmet";
import FooterContact from "../footer_contact";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Coding Cambodia</title>
        </Helmet>
        <LandingPage />
        <Gallery />
        <h3 className="text-center">About Us</h3>
        <LandingPage />
        <About />
        <FooterContact />
      </div>
    );
  }
}

export default Dashboard;
