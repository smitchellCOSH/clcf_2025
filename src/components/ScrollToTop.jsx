/* 

ScrollToTop Component.

Handles the action of scrolling to the top of the page when a ScrollToTop
button is pressed. Interfaces with the BasicButton component for styling. No
ScrollToTop.module.css is necessary.

*/


/* Imports */
import React from 'react';
import styles from './BasicButton.module.css';

const ScrollToTop = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button className={styles.basicButton} onClick={scrollToTop}>
      Scroll to Top
    </button>
  );
};

export default ScrollToTop;
