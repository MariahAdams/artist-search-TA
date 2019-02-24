import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

class Artists extends Component {

  static propTypes = {
    artists: PropTypes.array.isRequired
  };

  render() {
    const { artists } = this.props;
    const artistList = artists.map(artist => {
      return <li key={artist.id}><Artist artist={artist}/></li>;
    });
    
    return (
      <ul>
        {artistList}
      </ul>
    );
  }
}

export default Artists;