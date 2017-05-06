import React from 'react';
import map from 'lodash/map';
import timezones from '../../data/timezones';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';

class SignupForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: '',
			errors: {}
		}
		
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	
	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}
	
	isValid(){
		const {errors, isValid} = validateInput(this.state);
		
		if(!isValid){
			this.setState({errors});
		}
		
		return isValid
	}
	
	onSubmit(e){
		e.preventDefault();
		this.setState({errors: {}});
		if(this.isValid()){
			this.props.userSignupRequest(this.state).then(
				() => {},
				(err) => this.setState({errors: err.response.data})
			);
		}
	}
	
	render(){
		const {errors} = this.state;
		const options = map(timezones, (key, val) =>
			<option key={val} value={val}>{key}</option>
		);
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Register Now!</h1>
				<div className={classnames("form-group", {'has-error': errors.username})}>
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
					{errors.username && <span className="help-block">{errors.username}</span>}
				</div>
				
				<div className={classnames("form-group", {'has-error': errors.email})}>
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
					{errors.email && <span className="help-block">{errors.email}</span>}
				</div>
				
				<div className={classnames("form-group", {'has-error': errors.password})}>
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
					{errors.password && <span className="help-block">{errors.password}</span>}
				</div>
				
				<div className={classnames("form-group", {'has-error': errors.passwordConfirmation})}>
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
					{errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
				</div>
				
				<div className={classnames("form-group", {'has-error': errors.timezone})}>
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
					{errors.timezone && <span className="help-block">{errors.timezone}</span>}
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