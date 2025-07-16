/* 

Basic button specifications. These are the buttons that appear on various pages for 
additional linkage between pages. This button module can be used for the Scroll to Top
buttons on each page. 

*/

/* Styling contained in BasicButton.module.css. */



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './BasicButton.module.css';

const BasicButton = ({ to, children }) => {
  const navigate = useNavigate(); // Links to specified page.

  /* Controls actions upon clicking. */
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(to);
  };

  return (
    <button onClick={handleClick} className={styles.basicButton}>
      {children}
    </button>
  );
};

export default BasicButton;

