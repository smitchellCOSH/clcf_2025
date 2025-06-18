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
