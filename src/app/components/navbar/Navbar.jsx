"use client";

import Image from "next/image";
import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className="logo">
        <Link href="/">
          <Image
            className={styles.logoImg}
            src="/logo.png"
            width={340}
            height={85}
          />
        </Link>
      </div>
      <div className={styles.menuItems}>
        <Links />
      </div>
    </div>
  );
};

export default NavBar;
