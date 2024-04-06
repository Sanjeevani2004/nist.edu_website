import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/nist.png" alt="NIST Logo" />
        {/* <img src="/nba1.png" alt="NBA Logo" /> */}
        <div>
          <h1 className="title">NIST University</h1>
          {/* <h2 className="subTitle">Berhampur, Odisha</h2> */}
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;