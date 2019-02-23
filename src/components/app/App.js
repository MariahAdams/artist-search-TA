import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Search from '../search/Search';
import Footer from './Footer';

class App extends Component {

  render() {

    return (
      <Fragment>
        <Header />

        <Router>
          <Switch>
            <Route path="/" component={Search} />
          </Switch>
        </Router>

        <Footer />
      </Fragment>
    );
  }
}


export default App;