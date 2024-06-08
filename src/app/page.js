"use client"

import About from "./components/aboutSection/About";
import Header from "./components/header/Header";
import TypingText from "./components/typingText/TypingText";
import styles from "./page.module.css";
import ServicesSection from "./components/serviceSection/ServicesSection";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header/>
      <TypingText/>
      <About/>
      <ServicesSection/>
    </div>
  );
}
