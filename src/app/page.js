import About from "./components/aboutSection/About";
import Header from "./components/header/Header";
import TypingText from "./components/typingText/TypingText";
import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header/>
      <TypingText/>
      <About/>
    </div>
  );
}
