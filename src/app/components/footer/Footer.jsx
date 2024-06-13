"use client";

import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import FooterNav from "./footerNav/FooterNav";
import Link from "next/link";

const Footer = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/about/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.footerItems}>
        <div className={styles.footerLogo}>
          <Image src="/logonobg.png" width={150} height={150} />
        </div>
        <div className={styles.footerNav}>
          {links.map((link, i) => (
            <FooterNav item={link} key={i} />
          ))}
        </div>
        <div className={styles.footerAddress}>
          <h3>Visit Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia
            <br />
            natus voluptatibus ullam minus dignissimos, dolore suscipit
          </p>
        </div>
        <div className={styles.footerMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.024852640121!2d77.07800097615738!3d28.629017234239157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bf6ac2495d%3A0xfff07fc03531f009!2sDistrict%20Centre%2C%20Janakpuri%2C%20Delhi!5e0!3m2!1sen!2sin!4v1718315460576!5m2!1sen!2sin"
            width="350"
            height="250"
            style={{ border: "0", padding: "10px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          fontSize: "18px",
        }}
      >
        Developed by <Link href="https://aggarwaladi.com">Aditya Aggarwal</Link>
      </div>
    </div>
  );
};

export default Footer;
