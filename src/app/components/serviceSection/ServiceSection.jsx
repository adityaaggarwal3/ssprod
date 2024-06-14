"use client";

import React from "react";
import { motion } from "framer-motion";
import { TbBuildingFactory } from "react-icons/tb";
import { GiFuelTank } from "react-icons/gi";
import { SiSteem } from "react-icons/si";
import styles from "./services.module.css";

const ServicesSection = () => {
  return (
    <div className={styles.servicessection}>
      <motion.h2
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>
      <div className={styles.serviceContainer}>
        <motion.div
          className={styles.serviceCard}
          initial={{ y: 250, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="">
            <TbBuildingFactory size={100} color="orange" />
          </div>
          <div className={styles.serviceText}>
            <h3>EPC POWER PLANT</h3>
            <p>
              Turnkey Power Plant Solution have low investment costs, enabling
              shorter payback period.
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.serviceCard}
          initial={{ y: 250, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <SiSteem size={100} color="orange" />
          </div>
          <div className={styles.serviceText}>
            <h3>Steam At cost</h3>
            <p>
              Pay only for the steam used in your unit. We invest in Steam
              Boiler, Fuel, Engineering & Installation of Steam Boiler in your
              unit.
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.serviceCard}
          initial={{ y: 250, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <GiFuelTank size={100} color="orange" />
          </div>
          <div className={styles.serviceText}>
            <h3>Boiler Fuel Conversion</h3>
            <p>
              Modify your existing boiler to work on various fuels. It helps in
              achieving low operational fuel
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.serviceCard}
          initial={{ y: 250, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <TbBuildingFactory size={100} color="orange" />
          </div>
          <div className={styles.serviceText}>
            <h3>EPC POWER PLANT</h3>
            <p>
              Turnkey Power Plant Solution have low investment costs, enabling
              shorter payback period.
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.serviceCard}
          initial={{ y: 250, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <SiSteem size={100} color="orange" />
          </div>
          <div className={styles.serviceText}>
            <h3>Steam At cost</h3>
            <p>
              Pay only for the steam used in your unit. We invest in Steam
              Boiler, Fuel, Engineering & Installation of Steam Boiler in your
              unit.
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.serviceCard}
          initial={{ y: 250, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <GiFuelTank size={100} color="orange" />
          </div>
          <div className={styles.serviceText}>
            <h3>Boiler Fuel Conversion</h3>
            <p>
              Modify your existing boiler to work on various fuels. It helps in
              achieving low operational fuel
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
