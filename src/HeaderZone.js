import React, { Component } from 'react';
import { Spring, config } from 'react-spring';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import BasicPopup from './BasicPopup';
import SocialLinks from './SocialLinks';
import EnvelopeIcon from './EnvelopeIcon';
import DownArrowOh from './DownArrowOh';

class HeaderZone extends Component {
	render() {
		return (
			<Spring 
		        from={{ opacity: 0, marginTop: 0  }} 
		        to={{ opacity: 1, marginTop: 0  }}
		        delay='450'
		        config={ config.molasses }
		    >
          	{ props => (
			<MDBContainer fluid className="App-header" style={ props }>
	          <MDBRow className="d-flex align-items-center">
		        <MDBCol  md="6" lg="12" className="animated slideInDown slower">
		          	<h1 class="heavy-awesome-text">
		            	Alexander Jacks
		          	</h1>
	          		<img src="images/avatar.png" className="phiz rounded" alt="a small profile of site author Alexander Jacks, who encourages you to drink more kombucha"/>
	          		<SocialLinks />
	          	</MDBCol>
	          	<MDBCol  md="6" lg="12" >
		         	 <h4 class="ml-3">Hi! I enjoy building Progressive Web Apps for small businesses and nonprofits. Do you need a new website or web app?</h4>
		         	 <a href="mailto:alexdjacks@gmail.com" className=""><EnvelopeIcon /> Email me for more details.</a>
	          	</MDBCol>
	            <MDBCol sm="12" md="6" lg="12" mx-auto d-block>
	                <BasicPopup
	                  btnText="Clients I've worked with"
	                  title="Proud to consult with..."
	                  text="MinorityVets.org, Blackwood Housekeeping, JENIE.com, Veteran Mentor Network, Sitecast.com, Shadowcreek Software, WizFish Studios"
	                  confirmButtonText="Outstanding! 🙏"
	                />
	                <BasicPopup
	                  btnText="About this Portfolio"
	                  btnColor="orange"
	                  title="Responsive, with monitoring tools"
	                  text="In addition to scaling across different screen resolutions, this portfolio is a <strong><em>PWA (Progressive Web App)</em></strong>, which means you can add it to your phone's home screen (or Windows Desktop) and it'll act like an app. <strong><em>New Relic Browser</em></strong> script is used to provide performance monitoring metrics, and <strong><em>Lighthouse</em></strong> helps me improve technical aspects of the PWA experience. <strong><em>HotJar</em></strong> script is used to generate heatmaps from site visits-- I can see how users interact with this, and optimize the <strong><em>UX</em></strong> over time."
	                  confirmButtonText="Way to Be! 👊"
	                />
	                <BasicPopup
	                  btnText="More about Alex"
	                  btnColor="secondary"
	                  title="My Journey in Tech, in Brief"
	                  text="I built my first website in 1997 (HTML3?) and hosted it on the local ISP. I decided I wanted to do this professionally so I completed a web programming course in NYC and learned enough to build my own <strong><em>GUI</em></strong> in <strong><em>Java</em></strong>! But life had other plans and I enlisted in the military before finding work as a programmer.<br/>
	                  Several lifetimes later, I still missed designing user experiences so I finished another code school (this time in 2017, in Portland, Oregon) and learned how to build with current JS frameworks like <strong><em>React</em></strong>, and <strong><em>Angular</em></strong>, and to leverage tools like <strong><em>npm</em></strong>, <strong><em>Sketch</em></strong>, <strong><em>Sass</em></strong> and more. I've been consulting as a web developer since 2015 and am searching for a full time role in the Portland, Oregon area so I can supercharge my front-end learnings with some mentorship and <strong><em>Agile dev</em></strong>. Currently I'm volunteering my time with Minority Veterans of America and Code4PDX which is helping me become comfy doing code reviews and PRs on <strong><em>Github</em></strong>.<br/>
	                  Thanks for reading all of this!</p>"
	                  confirmButtonText="Right on! ✌️"
	                />
	            	</MDBCol>
	          	</MDBRow>

				<MDBRow>
					<MDBCol size="12">
						<DownArrowOh />
					</MDBCol>
	          	</MDBRow>
        	</MDBContainer>
        	)}
		</Spring>
		)
	}
}

export default HeaderZone;