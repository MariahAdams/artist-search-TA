import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArtistWork extends Component {

  static propTypes = {
    match: PropTypes.object
  };

  render() {
    console.log('work match', this.props.match.params);

    return (
      <>
        <h3>Artist Work Component</h3>
      </>
    );
  }
}

export default ArtistWork;