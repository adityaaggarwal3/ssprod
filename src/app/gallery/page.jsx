"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";
import Image from "next/image";
import styles from "./gallery.module.css";

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const openGallery = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    return setSelected(i);
  };

  return (
    <div className={styles.projects}>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Thumbnails]}
        thumbnails={{
          position: "bottom",
          width: 100,
          height: 80,
          border: 1,
          borderRadius: 4,
          padding: 4,
          gap: 10,
          showToggle: false,
        }}
        slides={[
          { src: "/powerplant1.jpg" },
          { src: "/powerplant.jpg" },
          { src: "/powerplant1.jpg" },
        ]}
      />
      <div className={styles.pageHeading}>
        <h2>Projects</h2>
      </div>
      <div className={styles.projectsContainer}>
        <div className={styles.projectCard}>
          <div className={styles.project}>
            <div className={styles.projectImg}>
              <Image src={"/powerplant.jpg"} height={300} width={300} />
            </div>
            <div className={styles.projectText}>
              <h3>Project Name</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt, quam similique? Necessitatibus nulla ratione placeat
                eum, dolorum et omnis molestiae minima adipisci perferendis
                praesentium reiciendis aut cum laudantium perspiciatis! Omnis.
              </p>
              <div className={styles.projectBtn}>
                <button
                  onClick={() => {
                    openGallery("open");
                    setOpen(true);
                  }}
                >
                  View Gallery
                </button>
                <button>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
