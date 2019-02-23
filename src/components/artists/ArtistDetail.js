import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getWorks } from '../../services/artistApi';

class ArtistDetail extends Component {
  
  state = {
    works: []
  };

  static propTypes = {
    match: PropTypes.object
  };

  // componentDidMount() {
  //   const { match } = this.props;
  //   getWorks(match.params.id)
  //     .then(res => {
  //       this.setState({ works: res.works });
  //       console.log('works', this.state.works);
  //     });
  // }

  render() {
    const { works } = this.state;
    const { artist } = this.props.match.params;

    const worksList = works.map(work => {
      return <li key={work.id}>
        <Link to={`/artists/${artist.name}/${work.title}/${work.id}`}>{work.title}</Link>
      </li>;
    });

    return (
      <>
        <h3>Artist Detail Component</h3>
        <ul>
          {worksList}
        </ul>
      </>
    );
  }
}

export default ArtistDetail;