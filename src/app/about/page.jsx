"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./about.module.css";
import Image from "next/image";
import ServicesSection from "../components/serviceSection/ServiceSection";

const AboutPage = () => {
  const services = [
    "Boiler Design & Retrofitting",
    "Industrial Civil Design & Constructions",
    "Steel Structural Design & Detail Engineering",
    "Thermal Power-Plants",
    "Critical Piping Design & Stress Analysis",
    "Architectural Design",
    "Home Interior",
    "Home Improvement",
    "Industrial Building & Office Construction",
    "Mechanical Design & Engineering",
    "Machine Design & Reverse Engineering",
    "Boiler & Powerplant Spares Manufacturing",
    "Boiler & Turbine Automation",
  ];

  const industries = [
    "Rice mills",
    "Paper",
    "Sugar",
    "Textiles",
    "Food processing",
    "Plywood",
    "Pharma",
    "Distilleries",
    "Brewery",
    "Chemicals",
    "Power",
    "Steel",
  ];

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
        <Image src="/logopreview.png" width={500} height={280} />
      </motion.div>
      <motion.div
        className={styles.aboutcontainer}
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className={styles.aboutText}>
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
        </div>
        <div className={styles.aboutImg}>
          <Image
            src="https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={500}
            height={300}
          />
        </div>
      </motion.div>
      <motion.div
        className={styles.aboutcontainer}
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className={styles.aboutText}>
          <h2>We provide services Related to:</h2>
          <ul>
            {services.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </div>
        <div className={styles.aboutImg}>
          <Image
            className={styles.aboutLgImg}
            src="/WA0022.jpg"
            width={700}
            height={500}
          />
        </div>
      </motion.div>
      <motion.div
        className={styles.aboutcontainer}
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className={styles.aboutText}>
          <h2>Industries We Service:</h2>
          <ul>
            {industries.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </div>
        <div className={styles.aboutImg}>
          <Image
            className={styles.aboutLgImg}
            src="/WA0022.jpg"
            width={700}
            height={500}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
