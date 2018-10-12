import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import Character from './Character'

class App extends Component {
  render() {
    return (
      <Segment basic>
        <NavBar />
        <Flash />
          <Switch>
          {/* <Route exact path='/Hopsin' component={Hopsin} />
          <Route exact path='/RandomBeer' component={RandomBeer} />
          <Route exact path='/RandomBrewery' component={RandomBrewery} />
          <Route exact path='/Brewery' component={Brewery} /> */}
          <Route exact path='/Character' component={ Character } />
            <Route exact path='/' component={Home} />
            <Route component={NoMatch} />
          </Switch>
      </Segment>
    );
  }
}

export default App;
