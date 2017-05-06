import React from 'react';
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component{
	render(){
		return (
			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
				<div className="navbar-header">
				  <Link to="/" className="navbar-brand">WebSiteName</Link>
				</div>
				<div>
					<ul className="nav navbar-nav navbar-right">
					  <li><Link to="/signup">Sign Up</Link></li>
					</ul>
				</div>
			  </div>
			</nav>
		);
	}
}

export default NavigationBar;