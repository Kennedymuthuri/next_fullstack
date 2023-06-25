import React from 'react';
import styles from './toggle.module.css';

export default function DarkModeToggle() {
  return (
    <div className={styles.container}>
    <div className={styles.icon}>🌛</div>
    <div className={styles.icon}>🌞</div>
    <div className={styles.ball}/>
    </div>
  );
}
