"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./header.module.css";

import { Autoplay, Pagination } from "swiper/modules";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.sliderContainer}>
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className={styles.imgContainer}>
              <img src="/header1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgContainer}>
              <img src="https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgContainer}>
              <img src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgContainer}>
              <img src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgContainer}>
              <img src="https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
