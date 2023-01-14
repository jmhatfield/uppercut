import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
      <div>Uppercut Tree Service</div>
      <div className={styles.spacer} />
      <div>Services</div>
      <div>Contact</div>
    </div>
  );
}

export default Navbar;
