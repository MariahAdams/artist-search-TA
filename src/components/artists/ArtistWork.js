import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../app/Loading';
import { getLyrics } from '../../services/artistApi';

class ArtistWork extends Component {

  state = {
    lyrics: '',
    loading: false,
    error: false,
    query: ''
  };

  static propTypes = {
    match: PropTypes.object
  };
  
  formatQuery(artist, song) {
    const res = artist + ' ' + song;
    return res.toLowerCase().split(' ').join('+');
  }

  async componentDidMount() {
    const { artist, work } = this.props.match.params;
    this.setState({ lyrics: '', loading: true });

    const res = await getLyrics(artist, work);
    if(res.error) this.setState({ lyrics: res.error, error: true, query: this.formatQuery(artist, work), loading: false });
    else this.setState({ lyrics: res.lyrics, loading: false });
  }

  render() {
    const { lyrics, error, query, loading } = this.state;
    const title = this.props.match.params.work;

    return (
      <>
        <h2>{title}</h2>
        {loading ? <Loading /> : <pre>{lyrics}</pre>}
        
        {error && <a rel="noopener noreferrer" target="_blank" href={`https://www.google.com/search?q=${query}`}>Try Google</a>}
      </>
    );
  }
}

export default ArtistWork;