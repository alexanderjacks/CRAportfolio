import React, { Component } from 'react';

class SocialLinks extends Component {
	render() {
		return(
			<div className="d-flex justify-content-around">
				<a className="social-links" href="https://s3.amazonaws.com/bux4jax/2019Feb_resume_Alexander_Jacks.pdf"  target="_blank" rel="noopener noreferrer"><i class="far fa-file-pdf"></i></a>
				<a className="social-links" href="https://www.instagram.com/a.d.jacks/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
				<a className="social-links" href="https://www.linkedin.com/in/alexander-jacks/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
				<a className="social-links" href="https://github.com/alexanderjacks" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
			</div>
		);
	}	
}
export default SocialLinks;