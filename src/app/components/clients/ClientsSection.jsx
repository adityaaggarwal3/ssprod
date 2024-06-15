import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import styles from "./clients.module.css";
import Image from "next/image";

const ClientsSection = () => {
  return (
    <div className={styles.clientsSection}>
      <motion.h2
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Clients
      </motion.h2>
      <motion.div
        className={styles.sliderContainer}
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          autoplay={{
            delay: 1500,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.textbox}>
              <Image
                className={styles.clientlogo}
                src="/logonobg.png"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.textbox}>
              <Image
                className={styles.clientlogo}
                src="/logonobg.png"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.textbox}>
              <Image
                className={styles.clientlogo}
                src="/logonobg.png"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.textbox}>
              <Image
                className={styles.clientlogo}
                src="/logonobg.png"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.textbox}>
              <Image
                className={styles.clientlogo}
                src="/logonobg.png"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.textbox}>
              <Image
                className={styles.clientlogo}
                src="/logonobg.png"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.textbox}>
              <Image
                className={styles.clientlogo}
                src="/logonobg.png"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.textbox}>
              <Image
                className={styles.clientlogo}
                src="/logonobg.png"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.textbox}>
              <Image
                className={styles.clientlogo}
                src="/logonobg.png"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default ClientsSection;
