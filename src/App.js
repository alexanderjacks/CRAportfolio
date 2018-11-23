import React, { Component } from 'react';

import HeaderZone from './HeaderZone';
import Projects from './Projects';
import BasicPopup from './BasicPopup';
import SocialLinks from './SocialLinks';

import './App.css';

class App extends Component {
  state = true;
  render() {
    return (
      <div className="App">
        
        <HeaderZone/>
        
        <Projects/>
        
        <footer className="important my-3">
          <SocialLinks />
          <p className="text-white">Copyright Alexander Jacks, 2018
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
