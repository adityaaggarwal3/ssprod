"use client";

import React from "react";
import CountUp, { useCountUp } from "react-countup";
import styles from "./counter.module.css";

const Counter = () => {
  return (
    <div className={styles.counter}>
      <div>
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
      </div>
      <div>
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
      <div>
        <h2>
          <CountUp
            start={0}
            end={50}
            duration={5}
            enableScrollSpy={true}
            scrollSpyOnce={true}
          ></CountUp>{" "}
          +
        </h2>
        <p>Clients</p>
      </div>
    </div>
  );
};

export default Counter;
