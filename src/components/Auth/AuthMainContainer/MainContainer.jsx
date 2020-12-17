import { Component, useState } from 'react';
import './MainContainer.css';
import Form from '../AuthFieldContainer/AuthFieldContainer';
import { withRouter } from 'react-router-dom';
import { EmailValidator } from '../../../utils/email';

class MainContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			option: 1,
			email: '',
			password: '',
			re_pass: '',
		};
	}

	// can check if our token is available in the local/session storage or not and accordingly we can allow user directly to dashboard
	static getDerivedStateFromProps(props, state) {}

	toggleAuthOption = (section) => {
		this.setState({
			...this.state,
			option: section,
		});
	};

	onBlurCheck = (type, field) => {
		if (field === 'email') {
			if (!EmailValidator(this.state.email)) {
				window.alert('Enter valid Email');
			}
		}
		if (type === 1) {
			if (this.state.password !== this.state.re_pass) {
				window.alert("Password doesn't match");
			}
		}
	};

	// for improving performances we can use this by making return false to
	// stop unnecessary rendering
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	// can use this if we need to update anything after getting responses
	componentDidUpdate(prevProps, prevState) {}

	onEmailValueChange = (field, value) => {
		if (field === 0) {
			this.setState({
				...this.state,
				email: value,
			});
		} else if (field === 1) {
			this.setState({
				...this.state,
				password: value,
			});
		} else {
			this.setState({
				...this.state,
				re_pass: value,
			});
		}
	};

	onSubmit = (type) => {
		if (type === 0) {
			console.log(this.state);
			this.props.history.push('/hh/main');
		} else if (type === 1) {
			console.log(this.state);
			if (this.state.password !== '') {
				if (
					this.state.password !== this.state.re_pass ||
					!EmailValidator(this.state.email)
				) {
					window.alert("Password doesn't match");
				} else {
					this.props.history.push('/hh/main');
				}
			} else {
				window.alert('Enter password');
			}
		}
	};

	render() {
		return (
			<div className='container'>
				<header>
					<div
						className={
							'header-headings ' +
							(this.state.option === 0
								? 'sign-in'
								: this.state.option === 1
								? 'sign-up'
								: 'forgot')
						}></div>
				</header>

				<Form
					option={this.state.option}
					change={(field, value) => this.onEmailValueChange(field, value)}
					submit={(type) => this.onSubmit(type)}
					blur={(type, field) => this.onBlurCheck(type, field)}
				/>
				<ul className='options'>
					<li
						className={this.state.option === 0 ? 'active' : ''}
						onClick={() => this.toggleAuthOption(0)}>
						Sign in
					</li>
					<li
						className={this.state.option === 1 ? 'active' : ''}
						onClick={() => this.toggleAuthOption(1)}>
						Sign up
					</li>
				</ul>
			</div>
		);
	}
}

export default withRouter(MainContainer);
