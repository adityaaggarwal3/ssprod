"use client";

import React from "react";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import Counter from "../counter/Counter";
import Link from "next/link";

const About = () => {
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
            S&S Engineering Solutions is a full service engineering and design
            firm with a dedicated team of experienced personnel more than 18+
            years of experience providing a full range of cost effective
            Engineering/Design, Procurement and Construction (EPC) services for
            Biomass Steam Boiler,Power-plants, Ethanol Plants, Steel Plants,
            Petrochemical Industry and Oil & Gas field. We can assist you
            through the entire design process, from planning to engineering,
            construction, execution and commissioning.
          </p>
          <div className={styles.cta}>
            <Link href="/about">
              <button>Learn More...</button>
            </Link>
            <Link href="/contact">
              <button>Contact Us</button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
