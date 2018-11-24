import React, { Component } from 'react';
import BasicPopup from './BasicPopup';
import SocialLinks from './SocialLinks';
import EnvelopeIcon from './EnvelopeIcon';

class HeaderZone extends Component {
	render() {
		return (
			<header className="App-header verakatz container-fluid">
	          <div className="row d-flex align-items-center">
		        <div className="">
		          	<h1 class="heavy-awesome-text animated slideInDown slower">
		            	Alexander Jacks
		          	</h1>
		         	 <h2 class="heavy-awesome-text animated slideInRight slower ml-3">
		            	Front-end web developer
		          	</h2>
	          	</div>
	          </div>
	          <div className="row">
	            <div className="col">
					<p className="font-bold">
					Below are some examples of my design, development, and deployment chops.<br/><a href="mailto:alexdjacks@gmail.com" className="navy-link"><EnvelopeIcon /> Email me for more details.</a>
					</p>
					<SocialLinks />
	            </div>
	            <div className="d-flex justify-content-around col-md-6 col-lg-12">
	              <div className="mx-auto">
	                <BasicPopup
	                  btnText="Companies I've worked with"
	                  title="Proud to consult with..."
	                  text="Minority Veterans of America, Blackwood Housekeeping, JENIE.com, Veteran Mentor Network, Sitecast.com, Shadowcreek Software, WizFish Studios"
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
	                  text="I built my first website in 1997, and figured out how to host it on the local ISP after I read enough BBS posts about <strong><em>FTP</em></strong> clients. I decided I wanted to do this professionally, so I finished a web programming course in NYC and learned enough to build my own <strong><em>GUI</em></strong> in <strong><em>Java</em></strong>! But life had other plans and witnessing 9/11 steered me into enlisting in the military instead of finding work as a programmer. Several lifetimes later, I realized I missed designing user experiences so I finished another code school (this time in Portland, Oregon) and learned how to work with current JS frameworks like <strong><em>React</em></strong>, <strong><em>Vue</em></strong>, <strong><em>Angular</em></strong>, (even <strong><em>Ember</em></strong>, in theory!) and how to leverage tools like <strong><em>Github</em></strong>, <strong><em>Bootstrap</em></strong>, <strong><em>Sass</em></strong>, <strong><em>FontAwesome</em></strong>, and more. I've been consulting as a web developer since 2015 (before code school, even) and am searching for a full time role in the Portland, Oregon area so I can supercharge my front-end learnings with some mentorship and <strong><em>Agile dev</em></strong>. Right now I'm volunteering with Code4PDX which is tuning me in to team development practices, and I'm also volunteering to build a site for Minority Veterans of America, which is helping me learn the <strong><em>Agile</em></strong> methodology and become comfy doing code reviews and PRs on <strong><em>Github</em></strong>. Thanks for reading all of this!</p>"
	                  confirmButtonText="Right on! ✌️"
	                />
	              </div>
	            </div>
	          </div>

        	</header>
		)
	}
}

export default HeaderZone;