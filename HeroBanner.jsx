"use client";
import * as React from "react";

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">
          Empowering Your Future Through Quality Education
        </h1>
        <div className="hero-cta-container">
          <button
            className="hero-cta-button primary"
            onClick={() => (window.location.href = "/enquire")}
            aria-label="Enquire Now"
          >
            Enquire Now
          </button>
          <button
            className="hero-cta-button secondary"
            onClick={() => (window.location.href = "/download-prospectus")}
            aria-label="Download Prospectus"
          >
            Download Prospectus
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
