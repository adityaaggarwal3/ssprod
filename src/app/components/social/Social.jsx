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
import Link from "next/link";

const Social = () => {
  return (
    <>
      <div className={styles.sociallinks}>
        <FaSquareFacebook color="orange" className={styles.socialLogo} />
        <FaLinkedin color="orange" className={styles.socialLogo} />
        <FaSquareInstagram color="orange" className={styles.socialLogo} />
        <Link href=" https://wa.me/9599173003?text=urlencodedtext">
          <FaSquareWhatsapp color="orange" className={styles.socialLogo} />
        </Link>
        <FaXTwitter color="orange" className={styles.socialLogo} />
      </div>
      <div className={styles.contactNum}>
        <FaPhone color="orange" />
        <Link href="tel: 9599173003">
          <span>9599173003</span>
        </Link>
      </div>
    </>
  );
};

export default Social;
