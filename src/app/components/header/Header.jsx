"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./header.module.css";

import { Autoplay, Pagination } from "swiper/modules";

const Header = () => {
  return (
    <div className={styles.header}>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.imgContainer}>
            <img src="/header1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgContainer}>
            <img src="https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgContainer}>
            <img src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgContainer}>
            <img src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgContainer}>
            <img src="https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
