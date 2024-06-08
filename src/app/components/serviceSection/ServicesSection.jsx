"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import styles from "./servicesect.module.css";

const ServicesSection = () => {
  return (
    <div className={styles.servicessection}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        // loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.swiperContainer}>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperContainer}>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperContainer}>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.swiperContainer}>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperContainer}>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperContainer}>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.swiperContainer}>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperContainer}>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiperContainer}>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
            <div className={styles.swiperContent}>test</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServicesSection;
