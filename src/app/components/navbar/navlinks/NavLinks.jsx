"use client";

import Link from "next/link";
import styles from "./navlinks.module.css";
import { usePathname } from "next/navigation";

const NavLinks = ({ item }) => {
  const path = usePathname();

  return (
    <div>
      <Link
        href={item.path}
        className={`${styles.link} ${path === item.path && styles.active} `}
      >
        {item.title}
      </Link>
      <></>
    </div>
  );
};

export default NavLinks;
