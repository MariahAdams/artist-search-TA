import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Artist extends Component {

  static propTypes = {
    artist: PropTypes.string.isRequired
  };

  render() {
    const { artist } = this.props;

    return (
      <>
        <p>{artist}</p>
      </>
    );
  }
}

export default Artist;