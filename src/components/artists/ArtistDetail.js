import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../app/Loading';
import { getWorks } from '../../services/artistApi';

class ArtistDetail extends Component {
  
  state = {
    works: [],
    loading: false
  };

  static propTypes = {
    match: PropTypes.object
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ works: [], loading: true });

    const res = await getWorks(id);
    this.setState({ works: res.works, loading: false });
  }

  render() {
    const { works } = this.state;
    const { artist, loading } = this.props.match.params;

    const worksList = works.map(work => {
      return <li key={work.id}>
        <Link to={`/artists/${artist}/${work.title}/${work.id}`}>{work.title}</Link>
      </li>;
    });

    return (
      <>
        <h2>{artist}</h2>
        <ul>
          {loading && <Loading />}
          {worksList}
        </ul>
      </>
    );
  }
}

export default ArtistDetail;