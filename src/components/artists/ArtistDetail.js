import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../app/Loading';
import { getWorks } from '../../services/artistApi';

class ArtistDetail extends Component {
  
  state = {
    works: []
  };

  static propTypes = {
    match: PropTypes.object
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await getWorks(id);
    this.setState({ works: res.works });
  }

  render() {
    const { works } = this.state;
    const { artist } = this.props.match.params;

    const worksList = works.map(work => {
      return <li key={work.id}>
        <Link to={`/artists/${artist}/${work.title}/${work.id}`}>{work.title}</Link>
      </li>;
    });

    return (
      <>
        <h2>{artist}</h2>
        <ul>
          {!works
            ? <Loading />
            : [worksList]
          }
          {!works.length && <li>No works found</li>}
        </ul>
      </>
    );
  }
}

export default ArtistDetail;