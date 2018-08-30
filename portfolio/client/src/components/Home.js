import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Navigation />
        <header className="App-header">
          <h1 className="App-title">Hello,<br /> My Name is Maximo Delarosa</h1>
        </header>
      </div>
     );
  }
}
 
export default Home;