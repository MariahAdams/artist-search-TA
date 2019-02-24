import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {

  render() {

    return (
      <header className={styles.header}>
        <h1>Artist Search</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
    );
  }
}

export default Header;