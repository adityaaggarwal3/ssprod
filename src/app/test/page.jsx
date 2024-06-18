"use client";

import { motion } from "framer-motion";
import { TbBuildingFactory } from "react-icons/tb";
import styles from "./test.module.css";

const Test = () => {
  const data = [
    {
      title: "EPC POWER PLANTBoiler Design & Retrofitting",
      image: "",
      desc: "Turnkey Power Plant Solution have low investment costs, enabling shorter payback period.",
    },
    {
      title: "Industrial Civil Design & Constructions",
      image: "",
      desc: "Turnkey Power Plant Solution have low investment costs, enabling shorter payback period.",
    },
    {
      title: "Steel Structural Design & Detail Engineering",
      image: "",
      desc: "Turnkey Power Plant Solution have low investment costs, enabling shorter payback period.",
    },
    {
      title: "Thermal Power-Plants",
      image: "",
      desc: "Turnkey Power Plant Solution have low investment costs, enabling shorter payback period.",
    },
    {
      title: "Critical Piping Design & Stress Analysis",
      image: "",
      desc: "Turnkey Power Plant Solution have low investment costs, enabling shorter payback period.",
    },
    {
      title: "Architectural Design",
      image: "",
      desc: "Turnkey Power Plant Solution have low investment costs, enabling shorter payback period.",
    },
    {
      title: "Home Interior",
      image: "",
      desc: "Turnkey Power Plant Solution have low investment costs, enabling shorter payback period.",
    },
    {
      title: "Home Improvement",
      image: "",
      desc: "Turnkey Power Plant Solution have low investment costs, enabling shorter payback period.",
    },
    {
      title: "Industrial Building & Office Construction",
      image: "",
      desc: "Turnkey Power Plant Solution have low investment costs, enabling shorter payback period.",
    },
    {
      title: "Mechanical Design & Engineering",
      image: "",
      desc: "Turnkey Power Plant Solution have low investment costs, enabling shorter payback period.",
    },
    {
      title: "Machine Design & Reverse Engineering",
      image: "",
      desc: "Turnkey Power Plant Solution have low investment costs, enabling shorter payback period.",
    },
    {
      title: "Boiler & Powerplant Spares Manufacturing",
      image: "",
      desc: "Turnkey Power Plant Solution have low investment costs, enabling shorter payback period.",
    },
    {
      title: "Boiler & Turbine Automation",
      image: "",
      desc: "Turnkey Power Plant Solution have low investment costs, enabling shorter payback period.",
    },
  ];

  return (
    <div className={styles.servicessection}>
      <div className={styles.pageHeading}>
        <motion.h2
          initial={{ y: 250, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
      </div>

      <div className={styles.serviceContainer}>
        {data.map((service, i) => (
          <motion.div
            key={i}
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
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Test;
