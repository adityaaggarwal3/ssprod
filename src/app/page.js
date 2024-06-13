"use client"

import About from "./components/aboutSection/About";
import Header from "./components/header/Header";
import TypingText from "./components/typingText/TypingText";
import styles from "./page.module.css";
import ServicesSection from "./components/serviceSection/AboutSliderSection";
import TeamSection from "./components/teamSection/TeamSection";
import ClientsSection from "./components/clients/ClientsSection";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header/>
      <TypingText/>
      <About/>
      <TeamSection/>
      <ClientsSection/>
    </div>
  );
}
