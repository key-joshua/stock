import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import indexContainaer from './min-components'
import HomeContainer from './components/HomeContainer';
import LoggedContainer from './components/LoggedContainer';
import NavbarLinkContainer from './components/NavbarLinkContainer';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <div>
            <NavbarLinkContainer />
            <Route exact path='/' component={HomeContainer} />
            <Route path='/login' component={LoggedContainer} />
            <Route path='/products' component={indexContainaer}/>
          </div>
        </BrowserRouter>
      </div>
    )
  };
}

export default App;
