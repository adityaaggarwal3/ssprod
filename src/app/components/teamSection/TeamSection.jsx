import React from "react";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import styles from "./teamsection.module.css";

const TeamSection = () => {
  const teamMembers = [
    { name: "", title: "", linkedin: "", facebook: "", instagram: "" },
    { name: "", title: "", linkedin: "", facebook: "", instagram: "" },
    { name: "", title: "", linkedin: "", facebook: "", instagram: "" },
    { name: "", title: "", linkedin: "", facebook: "", instagram: "" },
    { name: "", title: "", linkedin: "", facebook: "", instagram: "" },
    { name: "", title: "", linkedin: "", facebook: "", instagram: "" },
    { name: "", title: "", linkedin: "", facebook: "", instagram: "" },
    { name: "", title: "", linkedin: "", facebook: "", instagram: "" },
    { name: "", title: "", linkedin: "", facebook: "", instagram: "" },
    { name: "", title: "", linkedin: "", facebook: "", instagram: "" },
  ];

  return (
    <div className={styles.teamSection}>
      <h2>Our Team</h2>
      <div className={styles.cardContainer}>
        <div className={styles.singleCard}>
          <div className={styles.memberImgContainer}>
            <Image
              className={styles.memberImg}
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.memberInfo}>
            <h3 className={styles.memberName}>John Doe</h3>
            <h3 className={styles.memberDesignation}>Designation</h3>
            <div className={styles.socialIcons}>
              <FaLinkedinIn size={30} color="#fa7c07" />
              <FaFacebookF size={30} color="#fa7c07" />
              <FaInstagram size={30} color="#fa7c07" />
            </div>
          </div>
        </div>
        <div className={styles.singleCard}>
          <div className={styles.memberImgContainer}>
            <Image
              className={styles.memberImg}
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.memberInfo}>
            <h3 className={styles.memberName}>John Doe</h3>
            <h3 className={styles.memberDesignation}>Designation</h3>
            <div className={styles.socialIcons}>
              <FaLinkedinIn size={30} color="#fa7c07" />
              <FaFacebookF size={30} color="#fa7c07" />
              <FaInstagram size={30} color="#fa7c07" />
            </div>
          </div>
        </div>
        <div className={styles.singleCard}>
          <div className={styles.memberImgContainer}>
            <Image
              className={styles.memberImg}
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.memberInfo}>
            <h3 className={styles.memberName}>John Doe</h3>
            <h3 className={styles.memberDesignation}>Designation</h3>
            <div className={styles.socialIcons}>
              <FaLinkedinIn size={30} color="#fa7c07" />
              <FaFacebookF size={30} color="#fa7c07" />
              <FaInstagram size={30} color="#fa7c07" />
            </div>
          </div>
        </div>
        <div className={styles.singleCard}>
          <div className={styles.memberImgContainer}>
            <Image
              className={styles.memberImg}
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.memberInfo}>
            <h3 className={styles.memberName}>John Doe</h3>
            <h3 className={styles.memberDesignation}>Designation</h3>
            <div className={styles.socialIcons}>
              <FaLinkedinIn size={30} color="#fa7c07" />
              <FaFacebookF size={30} color="#fa7c07" />
              <FaInstagram size={30} color="#fa7c07" />
            </div>
          </div>
        </div>
        <div className={styles.singleCard}>
          <div className={styles.memberImgContainer}>
            <Image
              className={styles.memberImg}
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.memberInfo}>
            <h3 className={styles.memberName}>John Doe</h3>
            <h3 className={styles.memberDesignation}>Designation</h3>
            <div className={styles.socialIcons}>
              <FaLinkedinIn size={30} color="#fa7c07" />
              <FaFacebookF size={30} color="#fa7c07" />
              <FaInstagram size={30} color="#fa7c07" />
            </div>
          </div>
        </div>
        <div className={styles.singleCard}>
          <div className={styles.memberImgContainer}>
            <Image
              className={styles.memberImg}
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.memberInfo}>
            <h3 className={styles.memberName}>John Doe</h3>
            <h3 className={styles.memberDesignation}>Designation</h3>
            <div className={styles.socialIcons}>
              <FaLinkedinIn size={30} color="#fa7c07" />
              <FaFacebookF size={30} color="#fa7c07" />
              <FaInstagram size={30} color="#fa7c07" />
            </div>
          </div>
        </div>
        <div className={styles.singleCard}>
          <div className={styles.memberImgContainer}>
            <Image
              className={styles.memberImg}
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.memberInfo}>
            <h3 className={styles.memberName}>John Doe</h3>
            <h3 className={styles.memberDesignation}>Designation</h3>
            <div className={styles.socialIcons}>
              <FaLinkedinIn size={30} color="#fa7c07" />
              <FaFacebookF size={30} color="#fa7c07" />
              <FaInstagram size={30} color="#fa7c07" />
            </div>
          </div>
        </div>
        <div className={styles.singleCard}>
          <div className={styles.memberImgContainer}>
            <Image
              className={styles.memberImg}
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.memberInfo}>
            <h3 className={styles.memberName}>John Doe</h3>
            <h3 className={styles.memberDesignation}>Designation</h3>
            <div className={styles.socialIcons}>
              <FaLinkedinIn size={30} color="#fa7c07" />
              <FaFacebookF size={30} color="#fa7c07" />
              <FaInstagram size={30} color="#fa7c07" />
            </div>
          </div>
        </div>
        <div className={styles.singleCard}>
          <div className={styles.memberImgContainer}>
            <Image
              className={styles.memberImg}
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.memberInfo}>
            <h3 className={styles.memberName}>John Doe</h3>
            <h3 className={styles.memberDesignation}>Designation</h3>
            <div className={styles.socialIcons}>
              <FaLinkedinIn size={30} color="#fa7c07" />
              <FaFacebookF size={30} color="#fa7c07" />
              <FaInstagram size={30} color="#fa7c07" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
