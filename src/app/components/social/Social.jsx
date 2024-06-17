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
        <Link href="/">
          <FaSquareFacebook color="orange" className={styles.socialLogo} />
        </Link>
        <Link href="/">
          <FaLinkedin color="orange" className={styles.socialLogo} />
        </Link>
        <Link href="/">
          <FaSquareInstagram color="orange" className={styles.socialLogo} />
        </Link>
        <Link href=" https://wa.me/9599173003?text=urlencodedtext">
          <FaSquareWhatsapp color="orange" className={styles.socialLogo} />
        </Link>
        <Link href="/">
          <FaXTwitter color="orange" className={styles.socialLogo} />
        </Link>
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
