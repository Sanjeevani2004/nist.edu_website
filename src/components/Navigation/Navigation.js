import React from 'react';
import styles from './Navbar.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarLinks}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;