import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Search from '../search/Search';
import ArtistDetail from '../artists/ArtistDetail';
import ArtistWork from '../artists/ArtistWork';
import Footer from './Footer';

class App extends PureComponent {

  render() {

    return (
      <Router>
        <>
          <Header />

          <Switch>
            <Route path="/artists/:artist/:work/:id" component={ArtistWork} />
            <Route path="/artists/:artist/:id" component={ArtistDetail} />
            <Route path="/" component={Search} />
            <Redirect to="/home" />
          </Switch>

          <Footer />
        </>
      </Router>
    );
  }
}


export default App;
