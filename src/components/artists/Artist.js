import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArtistDetail from './ArtistDetail';

class Artist extends Component {

  static propTypes = {
    artist: PropTypes.string.isRequired
  };

  render() {
    const { artist } = this.props;

    return (
      <>
        <ArtistDetail />
        <p>{artist}</p>
      </>
    );
  }
}

export default Artist;