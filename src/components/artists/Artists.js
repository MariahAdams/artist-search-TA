import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Artists extends Component {

  static propTypes = {
    artists: PropTypes.array.isRequired
  };

  render() {
    const { artists } = this.props;
    const list = artists.map(artist => {
      return <li key={artist.id}>{artist.name}</li>;
    });
    
    return (
      <>
      <h3>Artists Component</h3>
      <ul>
        {list}
      </ul>
      </>
    );
  }
}

export default Artists;