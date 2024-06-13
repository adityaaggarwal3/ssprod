"use client";

import Link from "next/link";
import styles from "./footernav.module.css";

const FooterNav = ({ item }) => {
  return (
    <Link className={styles.footerNavItem} href={item.path}>
      {item.title}
    </Link>
  );
};

export default FooterNav;
