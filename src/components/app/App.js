import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Search from '../search/Search';
import ArtistDetail from '../artists/ArtistDetail';
import Footer from './Footer';

class App extends Component {

  render() {

    return (
      <Fragment>
        <Header />

        <Router>
          <Switch>
            <Route path="/artists/:name/:id" component={ArtistDetail} />
            <Route path="/" component={Search} />
            <Redirect to="/" />
          </Switch>
        </Router>

        <Footer />
      </Fragment>
    );
  }
}


export default App;