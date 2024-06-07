import React from "react";
import styles from "./hero.module.css";
import Header from "../header/Header";
import TypingText from "../typingText/TypingText";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Header />
      <TypingText />
    </div>
  );
};

export default Hero;
