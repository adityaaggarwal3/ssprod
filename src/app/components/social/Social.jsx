import React from "react";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaSquareInstagram,
  FaPhone,
  FaSquareWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import styles from "./social.module.css";

const Social = () => {
  return (
    <>
      <div className={styles.sociallinks}>
        <FaSquareFacebook color="orange" className={styles.socialLogo} />
        <FaLinkedin color="orange" className={styles.socialLogo} />
        <FaSquareInstagram color="orange" className={styles.socialLogo} />
        <FaSquareWhatsapp color="orange" className={styles.socialLogo} />
        <FaXTwitter color="orange" className={styles.socialLogo} />
      </div>
      <div className={styles.contactNum}>
        <FaPhone />
        <p>9599173003</p>
      </div>
    </>
  );
};

export default Social;
