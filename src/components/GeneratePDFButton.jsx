/* 

Generate PDF button specifications. This button is on the Plant Calculator
page and generates a PDF list of selected plants when clicked.

*/

/* Styling contained in BasicButton.module.css. */



import React from 'react';
import styles from './BasicButton.module.css';

const GeneratePDFButton = ({ onClick, children }) => {

  return (
    <button onClick={onClick} className={styles.basicButton}>
      {children}
    </button>
  );
};

export default GeneratePDFButton;

