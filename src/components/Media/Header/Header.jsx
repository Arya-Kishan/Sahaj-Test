import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.headerText}>Empower Yourself with Financial Knowledge</p>
    </div>
  )
}

export default Header