import React from "react";
import styles from "./services.module.css";
import ServicesSection from "@/app/components/serviceSection/ServiceSection";

const ServicesPage = () => {
  return (
    <div className={styles.servicePage}>
      <ServicesSection />
    </div>
  );
};

export default ServicesPage;
