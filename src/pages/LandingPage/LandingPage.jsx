import React, { Component } from 'react';
import './LandingPage.css';
import Auth from '../../components/Auth/AuthMainContainer/MainContainer';
class LandingPage extends Component {
	render() {
		window.alert(
			"Havn't added any styling, only add different react lifecycles with functionalities"
		);
		return (
			<div>
				{' '}
				<h1>homzhub intern application</h1>{' '}
				<div className='landing'>
					<Auth />
				</div>
			</div>
		);
	}
}

export default LandingPage;
