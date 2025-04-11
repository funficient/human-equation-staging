import React from "react";
import { Button } from "./Button";
import { HeroBannerProps } from "./types";

export const HeroBanner: React.FC<HeroBannerProps> = ({ title }) => {
  const handleEnquire = () => (window.location.href = "/enquire");
  const handleDownload = () => (window.location.href = "/download-prospectus");

  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <div className="hero-cta-container">
          <Button
            variant="primary"
            onClick={handleEnquire}
            ariaLabel="Enquire Now"
          >
            Enquire Now
          </Button>
          <Button
            variant="secondary"
            onClick={handleDownload}
            ariaLabel="Download Prospectus"
          >
            Download Prospectus
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
