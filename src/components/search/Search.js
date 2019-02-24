import React, { PureComponent } from 'react';
import Artists from '../artists/Artists';
import { getArtists } from '../../services/artistApi';
import styles from './Search.css';

class Search extends PureComponent {

  state = {
    query: '',
    artists: []
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSearch = async(e) => {
    e.preventDefault();
    const res = await getArtists(this.state.query);
    this.setState({ artists: res.artists });
  };

  render() {
    const { query, artists } = this.state;

    return (
      <>
        <h2>Artist Search</h2>
        <form onSubmit={this.handleSearch} className={styles.search}>
          <input type="text" name="query" placeholder="Enter an artist..." value={query} onChange={this.handleChange}></input>
          <button>Search</button>
        </form>

        {artists && <Artists artists={artists}/>}
      </>
    );
  }
}

export default Search;