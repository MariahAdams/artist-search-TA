import React, { Component, Fragment } from 'react';
import Header from './Header';
import Search from '../search/Search';
import Footer from './Footer';

class App extends Component {

  render() {

    return (
      <Fragment>
        <Header />

        <main>
					Welcome to zApp!

          <Search />
        </main>

        <Footer />
      </Fragment>
    );
  }
}


export default App;