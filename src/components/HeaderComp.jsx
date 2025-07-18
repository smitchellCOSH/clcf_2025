/* 

Header component specifications.
Creates a header at the top of any page with the
Sterling Heights logo and project title.

*/

/* Styling contained in HeaderComp.module.css */


/* Imports */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderComp.module.css';



/* Content */
const HeaderComp = () => {
  return (
    <header className={styles.HeaderComp}>

      {/* Logo */}
        <img
          src="photos/sh_logo_003.png"
          className={styles.HeaderImg}
          alt="Sterling Heights Logo"
        />

        {/* Title */}
        <h1 style={{ margin: 0, fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>
          Pocket Forests of{" "}
          <span style={{ color: "#383838" }}>
            Sterling Heights
          </span>
        </h1>

      </header>

    );
};

export default HeaderComp;
