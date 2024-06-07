"use client";

import styles from "./links.module.css";
import NavLinks from "../navlinks/NavLinks";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";

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

const Links = () => {
  const session = true;
  const isAdmin = true;

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, i) => (
          <NavLinks item={link} key={i} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLinks item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <span className={styles.menuBtn}>
        <Hamburger onToggle={(open) => setOpen((prev) => !prev)}></Hamburger>
      </span>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link, i) => (
            <NavLinks item={link} key={i} open={open} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
