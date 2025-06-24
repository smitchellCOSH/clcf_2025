/* 

Basic button specifications. These are the buttons that appear on various pages for 
additional linkage between pages. This button module can be used for the Scroll to Top
buttons on each page. 

*/

/* Styling contained in BasicButton.module.css. */


/* Imports */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BasicButton.module.css';


const BasicButton = ({ to, children }) => {
  return (
    <Link to={to} className={styles.basicButton}>
      {children}
    </Link>
  );
};

export default BasicButton;
