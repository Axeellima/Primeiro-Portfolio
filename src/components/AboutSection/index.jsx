import { AboutSectionStyle } from "./style";
import React, { useState, useLayoutEffect, useEffect } from "react";
const AboutSection = () => {
  const [scrollPosition, setPosition] = useState(0);
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [scrollPosition]);

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);
  return <AboutSectionStyle></AboutSectionStyle>;
};

export default AboutSection;
