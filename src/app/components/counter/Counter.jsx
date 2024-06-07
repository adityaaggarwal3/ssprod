"use client";

import React from "react";
import CountUp, { useCountUp } from "react-countup";
import styles from "./counter.module.css";

const Counter = () => {
  return (
    <div className={styles.counter}>
      <h2>
        <CountUp
          start={0}
          end={170}
          duration={5}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        ></CountUp>
      </h2>
      <p>Projects</p>
      <h2>
        <CountUp
          start={0}
          end={8}
          duration={5}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        ></CountUp>{" "}
        +
      </h2>
      <p>Years</p>
    </div>
  );
};

export default Counter;
