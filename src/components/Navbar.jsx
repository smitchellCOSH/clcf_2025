/* Navbar component specifications */

/* Styling contained in Navbar.module.css */




/* Imports */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';



/* Navbar link text and icon specifications. */
const Navbar = () => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showGuideDropdown, setShowGuideDropdown] = useState(false);
  const location = useLocation();

  const toggleAbout = () => setShowAboutDropdown(prev => !prev);
  const toggleGuide = () => setShowGuideDropdown(prev => !prev);


  return (
    <nav className={styles.navbar}>
      <div className={styles["dropdown-container"]} onMouseEnter={toggleAbout} onMouseLeave={toggleAbout}>

      <Link to="/" className={styles["nav-link"]}>
        <img src="/icons/sprout_blue.svg" alt="About icon" className={styles["nav-icon"]} /> About
      </Link>

      {showAboutDropdown && location.pathname === '/' && (
        <div className={styles.dropdown}>
            <a href="#welcome" className={styles["dropdown-link"]}>Welcome</a>
            <a href="#background" className={styles["dropdown-link"]}>Background</a>
            <a href="#definition" className={styles["dropdown-link"]}>What is a Pocket Forest?</a>
            <a href="#michigan_forest" className={styles["dropdown-link"]}>What makes a Michigan Pocket Forest?</a>
            <a href="#sh_forest" className={styles["dropdown-link"]}>Sterling Heights' Pocket Forest</a>
            <a href="#sh_comp" className={styles["dropdown-link"]}>What's in our forest?</a>
            <a href="#benefits_challenges" className={styles["dropdown-link"]}>Benefits and Challenges</a>
            <a href="#next_steps" className={styles["dropdown-link"]}>Next Steps</a>
          </div>
        )}
      </div>


      <div className={styles["dropdown-container"]} onMouseEnter={toggleGuide} onMouseLeave={toggleGuide}>
      
      <Link to="/guide" className={styles["nav-link"]}>
        <img src="/icons/book-open-page_blue.svg" alt="Guide icon" className={styles["nav-icon"]} /> Guide
      </Link>

      {showGuideDropdown && (
        <div className={styles.dropdown}>

        <Link to="/Step1" className={styles["dropdown-link"]}>Step 1</Link>
            <Link to="/Step2" className={styles["dropdown-link"]}>Step 2</Link>
            <Link to="/Step3" className={styles["dropdown-link"]}>Step 3</Link>
            <Link to="/plant-calculator" className={styles["dropdown-link"]}>Plant Calculator</Link>
          </div>

        )}
      </div>


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
