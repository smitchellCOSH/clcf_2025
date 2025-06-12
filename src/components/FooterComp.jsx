/* Footer component specifications */

/* Styling contained in FooterComp.module.css */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterComp.module.css';

const FooterComp = () => {
  return (
    <div className={styles.footer_links}>
      <p>
        <Link to="/Contact" className={styles.footer_link_text}>
          Contact
        </Link>

        {" ↟ "}

        <Link to="/FAQ" className={styles.footer_link_text}>
          Frequently Asked Questions
        </Link>

        {" ↟ "}

        <a
          className={styles.footer_link_text}
          href="https://sterlingheights.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sterling Heights
        </a>
      </p>
    </div>
  );
};

export default FooterComp;
