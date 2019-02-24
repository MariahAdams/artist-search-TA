import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getLyrics } from '../../services/artistApi';

class ArtistWork extends Component {

  state = {
    lyrics: ''
  };

  static propTypes = {
    match: PropTypes.object
  };

  async componentDidMount() {
    const { artist, work } = this.props.match.params;
    const res = await getLyrics(artist, work);
    // TODO: try google
    this.setState({ lyrics: res.lyrics || res.error });
  }

  render() {
    const { lyrics } = this.state;
    const title = this.props.match.params.work;

    return (
      <>
        <h2>{title}</h2>
        <pre>{lyrics}</pre>
      </>
    );
  }
}

export default ArtistWork;