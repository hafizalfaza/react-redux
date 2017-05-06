import React from 'react';
import map from 'lodash/map';
import timezones from '../../data/timezones';
import PropTypes from 'prop-types';

class SignupForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: ''
		}
		
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	
	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}
	
	onSubmit(e){
		e.preventDefault();
		this.props.userSignupRequest(this.state);
	}
	
	render(){
		const options = map(timezones, (key, val) =>
			<option key={val} value={val}>{key}</option>
		);
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Register Now!</h1>
				<div className="form-group">
					<label className="control-label">
						Username
					</label>
					<input
						className="form-control"
						type="text"
						name="username"
						value={this.state.username}
						onChange={this.onChange}
					/>
				</div>
				
				<div className="form-group">
					<label className="control-label">
						Email
					</label>
					<input
						className="form-control"
						type="text"
						name="email"
						value={this.state.email}
						onChange={this.onChange}
					/>
				</div>
				
				<div className="form-group">
					<label className="control-label">
						Password
					</label>
					<input
						className="form-control"
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.onChange}
					/>
				</div>
				
				<div className="form-group">
					<label className="control-label">
						Confirm Password
					</label>
					<input
						className="form-control"
						type="password"
						name="passwordConfirmation"
						value={this.state.passwordConfirmation}
						onChange={this.onChange}
					/>
				</div>
				
				<div className="form-group">
					<label className="control-label">
						Timezone
					</label>
					<select
						className="form-control"
						name="timezone"
						value={this.state.timezone}
						onChange={this.onChange}
					>
					<option value='' disabled>Choose Your Timezone</option>
					{options}
					</select>
				</div>
				<div className="form-group">
					<button className="btn btn-primary btn-lg">
						Sign Up
					</button>
				</div>
			</form>
		);
	}
}

SignupForm.propTypes = {
	userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;