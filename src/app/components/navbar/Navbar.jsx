"use client";

import Image from "next/image";
import React from "react";
import Links from "./links/Links";
import Link from "next/link";
import Social from "../social/Social";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const NavBar = () => {
  const path = usePathname();

  return (
    <div className={styles.navBar}>
      <div className={styles.mainNav}>
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
      {path != "/admin" && (
        <div className={styles.socialNav}>
          <Social />
        </div>
      )}
    </div>
  );
};

export default NavBar;
