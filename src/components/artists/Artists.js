import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

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
        <Artist />
        {list}
      </ul>
      </>
    );
  }
}

export default Artists;