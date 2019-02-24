import React, { PureComponent } from 'react';
import Artists from '../artists/Artists';
import Loading from '../app/Loading';
import { getArtists } from '../../services/artistApi';
import styles from './Search.css';

class Search extends PureComponent {

  state = {
    query: '',
    artists: [],
    loading: false
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSearch = async(e) => {
    e.preventDefault();
    this.setState({ artists: [], loading: true });

    const res = await getArtists(this.state.query);
    this.setState({ artists: res.artists, loading: false });
  };

  render() {
    const { query, artists, loading } = this.state;

    return (
      <>
        <form onSubmit={this.handleSearch} className={styles.search}>
          <input type="text" name="query" placeholder="Enter an artist..." value={query} onChange={this.handleChange}></input>
          <button>Search</button>
        </form>

        {loading && <Loading />}
        {artists && <Artists artists={artists}/>}
      </>
    );
  }
}

export default Search;