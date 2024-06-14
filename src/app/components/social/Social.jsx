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
    <div className={styles.socialNav}>
      <div className={styles.sociallinks}>
        <FaSquareFacebook color="blue" size={30} />
        <FaLinkedin color="blue" size={30} />
        <FaSquareInstagram color="blue" size={30} />
        <FaSquareWhatsapp color="blue" size={30} />
        <FaXTwitter color="blue" size={30} />
      </div>
      <div className={styles.contactNum}>
        <FaPhone />
        9599173003
      </div>
    </div>
  );
};

export default Social;
