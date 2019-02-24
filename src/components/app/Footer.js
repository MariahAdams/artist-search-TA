import React, { Component } from 'react';
import styles from './Footer.css';

class Footer extends Component {
  
  render() { 

    return (
      <footer className={styles.footer}>
        &copy; 2019
      </footer>
    );
  }
}
 
export default Footer;