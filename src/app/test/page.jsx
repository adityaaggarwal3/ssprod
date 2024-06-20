"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import styles from "./test.module.css";
import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.projects}>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        // carousel={{ preload }}
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
    </div>
  );
};

export default Test;
