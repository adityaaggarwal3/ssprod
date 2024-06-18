"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbBuildingFactory } from "react-icons/tb";
import Hamburger from "hamburger-react";
import styles from "./test.module.css";

const Test = () => {
  const [isOpen, setOpen] = useState(false);
  const [isSelected, setSelected] = useState(null);

  return (
    <div className={styles.servicessection}>
      {/* <div>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div> */}
      <motion.h2
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        viewport={{ once: true }}
        onClick={() => setOpen(!isOpen)}
      >
        Our Services
      </motion.h2>

      <div
        className={styles.serviceContainer}
        onClick={(e) => {
          setOpen(!isOpen), setSelected(e.target);
          console.log(isSelected);
        }}
      >
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
            {isSelected && (
              <p>
                Turnkey Power Plant Solution have low investment costs, enabling
                shorter payback period.
              </p>
            )}
          </div>
        </motion.div>
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
            {isSelected && (
              <p>
                Turnkey Power Plant Solution have low investment costs, enabling
                shorter payback period.
              </p>
            )}
          </div>
        </motion.div>
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
            {isSelected === this && (
              <p>
                Turnkey Power Plant Solution have low investment costs, enabling
                shorter payback period.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Test;
