"use client";

import styles from "./links.module.css";
import NavLinks from "../navlinks/NavLinks";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Social from "../../social/Social";

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
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Links = () => {
  const session = false;
  const isAdmin = false;

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, i) => (
          <NavLinks item={link} key={i} />
        ))}
        {/* {session ? (
          <>
            {isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLinks item={{ title: "Login", path: "/login" }} />
        )} */}
      </div>
      <span className={styles.menuBtn}>
        <Hamburger
          color="orange"
          toggled={open}
          onToggle={(open) => setOpen((prev) => !prev)}
        ></Hamburger>
      </span>
      {open && (
        <div
          className={styles.mobileLinks}
          onClick={(open) => {
            setOpen((prev) => !prev);
          }}
        >
          {links.map((link, i) => (
            <NavLinks item={link} key={i} open={open} />
          ))}
          <div>
            <Social />
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
