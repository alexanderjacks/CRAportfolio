import React, { Component } from 'react';
import './App.css';

import Projects from './Projects';
import BasicPopup from './BasicPopup';
import SocialLinks from './SocialLinks';
import EnvelopeIcon from './EnvelopeIcon';

class App extends Component {
  state = true;
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Alexander Jacks's web app portfolio
          </h1>
          <div className="row">
            <div className="col">
              <img
                src="images/bizcard.png"
                className="img-fluid"
                alt="my business card"
               /><br/>
               <h5>
                Perhaps you've seen my business card?
               </h5>
               <h6>
                (I used Sketch)
               </h6>
            </div>
            <div className="d-flex justify-content-around flex-column col-md-6">
              <div className="mx-auto">
                <BasicPopup
                  btnText="Companies I've worked with"
                  title="Proud to consult with..."
                  text="Minority Veterans of America, Blackwood Housekeeping, JENIE.com, Veteran Mentor Network, Sitecast.com, Shadowcreek Software, WizFish Studios"
                  confirmButtonText="Outsanding!"
                />
                <BasicPopup
                  btnText="About this Portfolio"
                  btnColor="orange"
                  title="Responsive, with monitoring tools"
                  text="In addition to scaling across different screen resolutions, this portfolio is a <strong><em>PWA (Progressive Web App)</em></strong>, which means you can add it to your phone's home screen (or Windows Desktop) and it'll act like an app. <strong><em>New Relic Browser</em></strong> script is used to provide performance monitoring metrics, and <strong><em>Lighthouse</em></strong> helps me improve technical aspects of the PWA experience. <strong><em>HotJar</em></strong> script is used to generate heatmaps from site visits-- I can see how users interact with this, and optimize the <strong><em>UX</em></strong> over time."
                  confirmButtonText="Way to Be! ✌️"
                />
                <BasicPopup
                  btnText="More about Alex"
                  btnColor="secondary"
                  title="My Journey in Tech, in Brief"
                  text="I built my first website in 1997, and figured out how to host it on the local ISP after I read enough BBS posts about <strong><em>FTP</em></strong> clients. I decided I wanted to do this professionally, so a few years later I enrolled in a Web Programming school in NYC and learned industry best-practices and even built my own <strong><em>GUI</em></strong> in <strong><em>Java</em></strong>! Then 9/11 went down, and I was traumatised and angry enough to join the US Air Force, where I began an intense 5-year career as a <strong><em>data and voice network sysadmin</em></strong>. Years later I used the 9/11 GI Bill to complete a Psychology degree, but I still missed working with technology and designing user experiences. <p>So in 2017 I finished a code school in Portland, Oregon and learned how to work with current JS frameworks like <strong><em>React</em></strong>, <strong><em>Vue</em></strong>, <strong><em>Angular</em></strong>, (even <strong><em>Ember</em></strong>, in theory!) and how to leverage tools like <strong><em>Github</em></strong>, <strong><em>Bootstrap</em></strong>, <strong><em>Sass</em></strong>, <strong><em>FontAwesome</em></strong>, and more. I've been consulting as a web developer since 2015 (before code school, even) and am searching for a full time role in the Portland, Oregon area so I can supercharge my front-end learnings with some mentorship and <strong><em>Agile dev</em></strong>. Right now I'm volunteering with Code4PDX which is tuning me in to team development practices, and I'm also volunteering to build a site for Minority Veterans of America, which is helping me learn the <strong><em>Agile</em></strong> methodology and become comfy doing code reviews and PRs on <strong><em>Github</em></strong>. Thanks for reading all of this!</p>"
                  confirmButtonText="Right on! 🙏"
                />
                <SocialLinks />
              </div>
            </div>
          </div>

          <p className="font-bold black-text">
            Below are some examples of my design, development, and deployment chops.<br/><a href="mailto:alexdjacks@gmail.com" className="navy-link"><EnvelopeIcon /> Email me for more details.</a>
          </p>
        </header>
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
