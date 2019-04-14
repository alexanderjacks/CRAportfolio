import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import BasicPopup from './BasicPopup';

const projects = [
	{key: 0, favicon: "images/favicon11.png", screen: "images/screens/11a.png", name:'Fight The Ban', techs:'GatsbyJS, AWS, Netlify', siteURL: 'https://www.fighttheban.org', ghURL: 'https://github.com/alexanderjacks/fighttheban', about: "Nonprofit promotional site built as a volunteer effort with <strong><em>Gatsby</em></strong>--  it's a smart way to build static <strong><em>React</em></strong> apps that load fast and look and feel like mobile experiences. Go ahead and add this website to your Home Screen!"},
	{key: 4, favicon: "images/favicon9.png", screen: "images/screens/9a.png", name:'Blackwood Housekeeping', techs:'Weebly, Sketch', siteURL: 'https://www.cinderellabychoice.com/', ghURL: '', about: "Example of a business site built in the Weebly <strong><em>CMS</em></strong>. Responsive design and custom graphics created with <strong><em>Sketch</em></strong>. Plan to embed business tools like text scheduling and booking on the site itself."},
	{key: 1, favicon: "images/favicon1.png", screen: "images/screens/1a.png", name:'Colors of Crypto', techs:'React, API, Bootstrap', siteURL: 'https://colors-crypto.firebaseapp.com', ghURL: 'https://github.com/alexanderjacks/colors-crypto', about: "Listing of the current 100 most valuable crypto-currencies, according to 'real money' investment-- updates via <strong><em>API</em></strong> every 5 minutes. I built this <strong><em>React</em></strong> app for personal use, when I was hobby speculating in crypto markets in early 2018. As a quick way to slice through the hundreds of coin and altcoin markets, this app is surprisingly useful for a homemade project. I got completely carried away assigning <strong><em>CSS</em></strong> color branding per coin but oh well..."},
	{key: 3, favicon: "images/favicon0.png", screen: "images/screens/0a.png", name:'Worldfacts', techs:'JSON, React, D3', siteURL: 'http://worldfacts-by-jacks.surge.sh', ghURL: 'https://github.com/alexanderjacks/worldfacts', about: "After some fiddling with data scraped from the CIA World Factbook, I decided to start building out my own more visual version of that awesome resource. A <strong><em>React</em></strong> SPA employs the <strong><em>nivo</em></strong> toolkit to leverage the <strong><em>D3</em></strong> data visualization library. I thoroughly enjoy this intersection of data work and visual design so this is a WIP-- check back on this soon."},
	{key: 5, favicon: "images/favicon5.png", screen: "images/screens/5a.png", name:'How To Crypto', techs:'Angular, MDBootsrap, FontAwesome', siteURL: 'https://how-to-crypto.herokuapp.com/', ghURL: 'https://github.com/Adjectival/how-to-crypto', about: "My first tutorial site, also an exploration of the impressive <strong><em>MDBootstrap</em></strong> library. I planned out the required steps to do stuff with crypto-currency, then used <strong><em>FontAwesome</em></strong> and screencaps to organize the information. Hosted on the free tier of <strong><em>Heroku</em></strong>, please forgive the slow load time."},
	{key: 2, favicon: "images/favicon2.png", screen: "images/screens/2a.png", name:'FWT Helper', techs:'Angular, Bootstrap, Bourbon, Pixlr', siteURL: 'https://fwt-helper.firebaseapp.com/', ghURL: 'https://github.com/Adjectival/fwt-helper', about: "A capstone project from code bootcamp, and a custom app built for my BFF who plays this mobile game Fantasy War Tactics that has a ton of characters. Before the game added its own feature to help sort the army of characters, I built this app in <strong><em>Angular.io</em></strong>. Animations are done using the awesome <strong><em>Saffron</em></strong> library, via <strong><em>Bourbon</em></strong>. The images are mostly from a wikia, but newer character images came from in-game screencaps which I then trimmed down in the (formerly awesome) web app <strong><em>Pixlr</em></strong>. Card colors reflect one of the character data attributes, as this was the first time I realized I could link <strong><em>CSS</em></strong> classes directly to the data layer. ^_^"}
];

const projectList = projects.map((project) =>
	<Card key={project.key} className="my-4 py-2 card-buffer">
		{/* large screencap of project*/}
		<div className="img-shield">
			<CardImage className="img-fluid mx-auto" src={project.screen} />
		</div>
		<CardBody className="pink-accent">
			{/* begin text */}
			<CardTitle className="">
				<a href={project.siteURL.toString()}>
					<img 
					className="favicon mr-2" 
					src={project.favicon}
					alt="web app project"
					 />
					{project.name.toString()}
				</a>
			</CardTitle>
			<CardText>
					{project.techs.toString()}
				<br/>
				<a href={project.ghURL.toString()}>
					<code>Code on Github</code>
				</a>
				<div className="d-flex justify-content-center">
					{/* begin buttons */}
					<Button
						color="warning"
						href={project.siteURL.toString()}
						target="_blank"
					>
						View Project
					</Button>
					<BasicPopup
						btnText="About Project"
						title={project.name.toString()}
						text={project.about.toString()}
						imageUrl={project.favicon}
					/>
				</div>
			</CardText>
		</CardBody>
	</Card>
);

class Projects extends Component {
	render() {
		return (
			<div className="important">{projectList}</div>
		)
	}
}

export default Projects;