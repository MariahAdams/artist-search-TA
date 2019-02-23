import React, { Component, Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends Component {

  render() {

    return (
      <Fragment>
        <Header />

        <main>
					Welcome to zApp!
        </main>

        <Footer />
      </Fragment>
    );
  }
}


export default App;