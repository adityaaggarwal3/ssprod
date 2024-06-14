"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./about.module.css";
import Image from "next/image";
import ServicesSection from "../components/serviceSection/ServiceSection";

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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            corrupti delectus, neque autem pariatur reiciendis deleniti
            laboriosam vel rem aperiam ipsa, rerum aliquid a. Optio, eligendi
            ut. Tempora, eaque exercitationem! Hic labore officiis nulla
            praesentium aliquid repellendus aut, eaque voluptatibus fugit,
            maiores autem, expedita inventore ad et amet laboriosam
            reprehenderit minima consectetur. Repellat voluptas assumenda veniam
            iure dolorem consectetur sed. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Esse corrupti delectus, neque autem
            pariatur reiciendis deleniti laboriosam vel rem aperiam ipsa, rerum
            aliquid a. Optio, eligendi ut. Tempora, eaque exercitationem! Hic
            labore officiis nulla praesentium aliquid repellendus aut, eaque
            voluptatibus fugit, maiores autem, expedita inventore ad et amet
            laboriosam reprehenderit minima consectetur. Repellat voluptas
            assumenda veniam iure dolorem consectetur sed.
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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            corrupti delectus, neque autem pariatur reiciendis deleniti
            laboriosam vel rem aperiam ipsa, rerum aliquid a. Optio, eligendi
            ut. Tempora, eaque exercitationem! Hic labore officiis nulla
            praesentium aliquid repellendus aut, eaque voluptatibus fugit,
            maiores autem, expedita inventore ad et amet laboriosam
            reprehenderit minima consectetur. Repellat voluptas assumenda veniam
            iure dolorem consectetur sed. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Esse corrupti delectus, neque autem
            pariatur reiciendis deleniti laboriosam vel rem aperiam ipsa, rerum
            aliquid a. Optio, eligendi ut. Tempora, eaque exercitationem! Hic
            labore officiis nulla praesentium aliquid repellendus aut, eaque
            voluptatibus fugit, maiores autem, expedita inventore ad et amet
            laboriosam reprehenderit minima consectetur. Repellat voluptas
            assumenda veniam iure dolorem consectetur sed.
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
    </motion.div>
  );
};

export default AboutPage;
