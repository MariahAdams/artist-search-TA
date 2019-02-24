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

  componentDidMount() {
    const { params } = this.props.match;
    getLyrics(params.artist, params.work)
      .then(res => {
        this.setState({ lyrics: res.lyrics });
      });
  }

  render() {
    const { lyrics } = this.state;
    const title = this.props.match.params.work;

    return (
      <>
        <h3>{title}</h3>
        <pre>{lyrics}</pre>
      </>
    );
  }
}

export default ArtistWork;