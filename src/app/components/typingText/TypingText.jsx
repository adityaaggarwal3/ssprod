"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import styles from "./typing.module.css";
import Image from "next/image";

const TypingText = () => {
  return (
    <div>
      <div className={styles.headerText}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: 0.5 }}
        >
          <Image src="/logonobg.png" width={200} height={200} />
        </motion.div>
        <motion.h1
          style={{ fontWeight: "900", fontSize: "80px", color: "#ea1d25" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          S<span style={{ fontSize: "60px", color: "#ef831b" }}>&</span>S
          Engineering Solutions
        </motion.h1>
        <motion.p
          style={{ color: "white", fontWeight: "bold", fontSize: "35px" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[
              "Boiler Plants...",
              "Steam Plants...",
              "Construction...",
              "Empowering Engineering and Technology...",
            ]}
            loop={10}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.p>
      </div>
    </div>
  );
};

export default TypingText;
