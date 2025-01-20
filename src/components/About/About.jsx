import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.webp")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building some projects
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cyberSecurity.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Cyber Security Enthusiast</h3>
              <p>
                I am curious about cyber security and have done some projects in this field
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/network.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Networks</h3>
              <p>
                I like to learn about networks and how they work
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
