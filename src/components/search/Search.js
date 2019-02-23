import React, { Component } from 'react';
import styles from './Search.css';

class Search extends Component {

  render() {

    return (
      <>
        <h2>Search Component</h2>
        <div className={styles.search}>
          <input type="text"></input>
          <button>Search</button>
        </div>
      </>
    );
  }
}

export default Search;