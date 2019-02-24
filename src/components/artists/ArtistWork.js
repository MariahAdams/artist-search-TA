import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getLyrics } from '../../services/artistApi';

class ArtistWork extends Component {

  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount() {
    console.log('work match', this.props.match.params);
    const { params } = this.props.match;
    //getLyrics()
    
  }

  render() {

    return (
      <>
        <h3>Artist Work Component</h3>
      </>
    );
  }
}

export default ArtistWork;