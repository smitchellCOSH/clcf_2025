/* Navbar component specifications */

/* Styling contained in Navbar.module.css */


import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';


/* Navbar link text and icon specifications */
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles["nav-link"]}>
        <img src="/icons/sprout_blue.svg" alt="About icon" className={styles["nav-icon"]} /> About
      </Link>


      <Link to="/guide" className={styles["nav-link"]}>
        <img src="/icons/book-open-page_blue.svg" alt="Guide icon" className={styles["nav-icon"]} /> Guide
      </Link>


      <Link to="/resources" className={styles["nav-link"]}>
        <img src="/icons/menu_blue.svg" alt="Resources icon" className={styles["nav-icon"]} /> Resources
      </Link>


      <Link to="/plot" className={styles["nav-link"]}>
        <img src="/icons/bee-flower_blue.svg" alt="Plot Your Forest icon" className={styles["nav-icon"]} /> Plot Your Forest
      </Link>
    </nav>
  );
};

export default Navbar;
