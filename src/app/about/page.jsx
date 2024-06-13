"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <motion.div
      className={styles.aboutPage}
      initial={{ y: 250, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className={styles.aboutheader}>
        <motion.h2
          initial={{ y: 250, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>
      </div>
      <motion.div
        className={styles.aboutLogo}
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Image src="/logopreview.png" width={500} height={300} />
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
