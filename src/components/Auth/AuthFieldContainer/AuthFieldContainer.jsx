import React, { Component } from 'react';
import '../AuthMainContainer/MainContainer.css';

export default class AuthFieldContainer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<form className='account-form' onSubmit={(evt) => evt.preventDefault()}>
				<div
					className={
						'account-form-fields ' +
						(this.props.option === 0
							? 'sign-in'
							: this.props.option === 1
							? 'sign-up'
							: 'forgot')
					}>
					{this.props.option === 0 ? (
						<span>Sign in to your account</span>
					) : this.props.option === 1 ? (
						<span>Create an account</span>
					) : (
						<span>Reset your password</span>
					)}

					<input
						id='email'
						name='email'
						type='email'
						placeholder='E-mail'
						required
						onChange={(e) => this.props.change(0, e.target.value)}
						onBlur={() => this.props.blur(this.props.option, 'email')}
					/>
					<input
						id='password'
						name='password'
						type='password'
						placeholder='Password'
						required={
							this.props.option === 0 || this.props.option === 1 ? true : false
						}
						disabled={this.props.option === 2 ? true : false}
						onChange={(e) => this.props.change(1, e.target.value)}
					/>
					<input
						id='repeat-password'
						name='repeat-password'
						type='password'
						placeholder='Repeat password'
						required={this.props.option === 1 ? true : false}
						disabled={
							this.props.option === 0 || this.props.option === 2 ? true : false
						}
						onChange={(e) => this.props.change(2, e.target.value)}
						onBlur={() => this.props.blur(this.props.option, '')}
					/>
				</div>
				<button
					className='btn-submit-form'
					type='submit'
					onClick={(e) => this.props.submit(this.props.option)}>
					{this.props.option === 0
						? 'Sign in'
						: this.props.option === 1
						? 'Sign up'
						: 'Reset password'}
				</button>
			</form>
		);
	}
}
