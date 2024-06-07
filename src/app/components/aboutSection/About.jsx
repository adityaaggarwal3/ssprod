"use client";

import React, { useref } from "react";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import Counter from "../counter/Counter";

const About = () => {
  // const aboutRef = useref();

  return (
    <div className={styles.about}>
      <motion.h1
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
      >
        About
      </motion.h1>
      <motion.div
        className={styles.abtContainer}
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div>
          <Counter />
        </div>
        <div></div>
      </motion.div>
    </div>
  );
};

export default About;
