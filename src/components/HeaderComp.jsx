/* Header component specifications */

/* Styling contained in HeaderComp.module.css */


import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderComp.module.css';

const HeaderComp = () => {
  return (
    <header className={styles.HeaderComp}>

      {/* Logo */}

        <img
          src="photos/sh_logo.png" // Public
          className="App-logo"
          alt="sh-logo"
          style={{ width: "10%", height: "auto", padding: "10px"}}
        />

        {/* Title */}
        <h1 style={{ margin: 0, fontSize: "auto" }}>
          Pocket Forests of{" "}
          <span style={{ color: "#0057b8" }}>
            Sterling Heights
          </span>
        </h1>

      </header>

    );
};

export default HeaderComp;
