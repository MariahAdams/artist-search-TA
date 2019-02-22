import React, { Component, Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import { getCharacters } from '../../services/api';

class App extends Component {

  state = {
    loading: false,
    test: ''
  };

  fetchData = () => {
    this.setState({ loading: true, test: '' });
    
    getCharacters()
      .then((res) => this.setState({ loading: false, test: res.results })); 
  };

  render() {
    const { loading, test } = this.state;

    return (
      <Fragment>
        <Header />

        <main>
					Welcome to zApp!
          <div>
            <button onClick={this.fetchData}>TRY ME</button>
          </div>
          {test && <p>{test}</p>}
          {loading && <Loading />}
        </main>

        <Footer />
      </Fragment>
    );
  }
}

function Loading() {

  return (
    <pre>Loading...</pre>
  );
}

export default App;