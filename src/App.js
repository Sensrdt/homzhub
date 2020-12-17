import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Redirect from='/' to='/hh/welcome' exact />
					<Route path='/hh/welcome' component={LandingPage} exact />
					<Route path='/hh/main' component={Dashboard} />
				</Switch>
			</Router>
		);
	}
}

export default App;
