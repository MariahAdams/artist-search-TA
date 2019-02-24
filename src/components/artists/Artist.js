import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Artist extends Component {

  static propTypes = {
    artist: PropTypes.object.isRequired
  };

  render() {
    const { artist } = this.props;

    return (
      <Link to={`/artists/${artist.name}/${artist.id}`}>{artist.name}</Link>
    );
  }
}

export default Artist;