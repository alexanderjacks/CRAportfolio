import React, { Component } from 'react';

import HeaderZone from './HeaderZone';
import Projects from './Projects';
import SocialLinks from './SocialLinks';

import './App.css';

class App extends Component {
  state = true;
  render() {
    return (
      <div className="App">
        
        <HeaderZone/>
        
        <Projects id="projects"/>
        
        <footer className="important my-3 mx-1">
          <SocialLinks />
          <p className="text-white">
            Alexander Jacks© 2019 -
             Portland<span> (🍩🌉)</span>,
              Oregon<span> (🌲🌊)</span>,
              Cascadia<span> (🌧🌈)</span>,
              USA<span> (🇺🇸)</span>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
