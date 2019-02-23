import React, { Component } from 'react';
import { getArtists } from '../../services/artistApi';
import styles from './Search.css';

class Search extends Component {

  state = {
    query: '',
    artists: []
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSearch = e => {
    e.preventDefault();
    console.log('You searched for...', this.state.query);
    getArtists(this.state.query)
      .then(res => {
        this.setState({ artists: res.artists });
        console.log('artists', this.state.artists);
      });
  };

  render() {
    const { query } = this.state;

    return (
      <>
        <h2>Search Component</h2>
        <div className={styles.search}>
          <input type="text" name="query" value={query} onChange={this.handleChange}></input>
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </>
    );
  }
}

export default Search;