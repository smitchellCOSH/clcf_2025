/* 

Footer component specifications. 
Adds a footer to the base of each page with links to resources,
including a contact page, a FAQ page, and to the Sterling Heights
official government website.

*/

/* Styling contained in FooterComp.module.css */


/* Imports */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterComp.module.css';

const FooterComp = () => {
  return (
    <div className={styles.footer_links}>
      <p>

        {/* Internal link */}
        <Link to="/Contact" className={styles.footer_link_text}>
          Contact
        </Link>

        {" ↟ "}

        {/* Internal link */}
        <Link to="/FAQ" className={styles.footer_link_text}>
          Frequently Asked Questions
        </Link>

        {" ↟ "}

        {/* External link */}
        <a
          className={styles.footer_link_text}
          href="https://www.sterlingheights.gov/"
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
