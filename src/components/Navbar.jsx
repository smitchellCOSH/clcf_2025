/* 
This file creates a navigation bar that displays at the top of the page. The navigation 
bar links to different pages. It also displays dropdown boxes to navigate to subpages and, 
in the case of the About page, the dropdown menu allows the user to navigate to different 
subheaders within the page. 
*/

/* Styling contained in Navbar.module.css */




/* Imports */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';


/* Navbar link text and icon specifications. */
const Navbar = () => {

  /* Sets the state for dropdowns and controls dropdown toggling on and off. */
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showGuideDropdown, setShowGuideDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  const toggleAbout = () => setShowAboutDropdown(prev => !prev);
  const toggleGuide = () => setShowGuideDropdown(prev => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);


  /* Controlls scrolling to specified anchors within pages. */
  const scrollToAnchor = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };


  return (
  <nav className={styles.navWrapper}>
    {/* Hamburger - always visible */}
    <button
      className={styles.hamburger}
      onClick={toggleMobileMenu}
      aria-label="Toggle navigation menu"
      type="button"
    >
      <img src="icons/menu_blue.svg" alt="menu" style={{ width: '30px', height: '30px' }} />
    </button>

    {/* Main nav container - toggled on mobile */}
    <div className={`${styles.navbar} ${isMobileMenuOpen ? styles.showMenu : ''}`}>
      {/* ABOUT */}
      <div
        className={styles["dropdown-container"]}
        onMouseEnter={() => !isMobileMenuOpen && toggleAbout()}
        onMouseLeave={() => !isMobileMenuOpen && toggleAbout()}
        onClick={() => isMobileMenuOpen && toggleAbout()}
      >
        <Link to="/" className={styles["nav-link"]}>
          <img src="icons/home-circle-outline-blue.svg" alt="About icon" className={styles["nav-icon"]} />
          About
        </Link>
        {showAboutDropdown && location.pathname === "/" && (
          <div className={styles.dropdown}>
            <a onClick={() => scrollToAnchor("background")} className={styles["dropdown-link"]}>Background</a>
            <a onClick={() => scrollToAnchor("definition")} className={styles["dropdown-link"]}>What is a Pocket Forest?</a>
            <a onClick={() => scrollToAnchor("benefits_challenges")} className={styles["dropdown-link"]}>Benefits and Challenges</a>
            <a onClick={() => scrollToAnchor("next_steps")} className={styles["dropdown-link"]}>Next Steps</a>
          </div>
        )}
      </div>

      {/* Guide */}
      <div
        className={styles["dropdown-container"]}
        onMouseEnter={() => !isMobileMenuOpen && toggleGuide()}
        onMouseLeave={() => !isMobileMenuOpen && toggleGuide()}
        onClick={() => isMobileMenuOpen && toggleGuide()}
      >
        <Link to="/guide" className={styles["nav-link"]}>
          <img src="icons/bee-flower_blue.svg" alt="Build your forest icon" className={styles["nav-icon"]} />
          Build your forest
        </Link>
        {showGuideDropdown && (
          <div className={styles.dropdown}>
            <Link to="/Step1" className={styles["dropdown-link"]}>Before Planting</Link>
            <Link to="/Step2" className={styles["dropdown-link"]}>Planting Day</Link>
            <Link to="/Step3" className={styles["dropdown-link"]}>After Planting</Link>
          </div>
        )}
      </div>

      {/* Resources */}
      <Link to="/resources" className={styles["nav-link"]}>
        <img src="icons/book-open-page_blue.svg" alt="Resources icon" className={styles["nav-icon"]} />
        Resources
      </Link>

      {/* Tools */}
      <Link to="/plant-calculator" className={styles["nav-link"]}>
        <img src="icons/sprout_blue.svg" alt="Tools icon" className={styles["nav-icon"]} />
        Tools
      </Link>
    </div>
  </nav>
);


};

export default Navbar;
