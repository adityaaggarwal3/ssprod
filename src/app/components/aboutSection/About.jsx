"use client";

import React, { useref } from "react";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import Counter from "../counter/Counter";

const About = () => {
  // const aboutRef = useref();

  return (
    <div className={styles.about}>
      <motion.div
        className={styles.abtContainer}
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div>
          <Counter />
        </div>
        <motion.div
          className={styles.textContainer}
          initial={{ y: 250, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            doloribus ad similique quo aspernatur quas repellat est dicta
            laborum, impedit, necessitatibus aliquid consequuntur deserunt,
            atque pariatur! Unde dolorem accusamus incidunt? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Impedit dicta eaque eum ipsum
            accusantium! Reprehenderit harum iusto quaerat id nam eius quidem
            similique reiciendis esse rem adipisci, possimus consequuntur rerum.
            Quasi autem saepe voluptate facere maxime vitae asperiores, animi
            similique ipsam impedit voluptas ipsum iste nihil esse beatae
            inventore atque quidem delectus dolor ea ratione quos odio.
            Suscipit, accusantium perferendis.
          </p>
          <div className={styles.cta}>
            <button>Learn More...</button>
            <button>Contact Us</button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
