import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Search from '../search/Search';
import ArtistDetail from '../artists/ArtistDetail';
import ArtistWork from '../artists/ArtistWork';
import Footer from './Footer';

class App extends Component {

  render() {

    return (
      <Fragment>
        <Header />

        <Router>
          <Switch>
            <Route exact path="/artists/:name/:id" component={ArtistDetail} />
            <Route exact path="/artists/:name/:work/:id" component={ArtistWork} />
            <Route path="/" component={Search} />
            <Redirect to="/home" />
          </Switch>
        </Router>

        <Footer />
      </Fragment>
    );
  }
}


export default App;