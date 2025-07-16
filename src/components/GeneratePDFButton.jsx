/* 

Generate PDF button specifications. This button is used for actions
that are not navigational (i.e., actions that do not link between
pages or to external links).

*/

/* Styling contained in BasicButton.module.css. */


/* Imports */
import React from 'react';
import styles from './BasicButton.module.css';


/* Content */
const GeneratePDFButton = ({ onClick, children }) => {

  /* Performs whatever action is specified by "onClick".
  Mostly used for PDF generation. */
  return (
    <button onClick={onClick} className={styles.basicButton}> 
      {children}
    </button>
  );
};

export default GeneratePDFButton;

