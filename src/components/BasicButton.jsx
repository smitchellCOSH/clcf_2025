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
