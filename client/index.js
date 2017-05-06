import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './components/App';
import Dashboard from './components/Dashboard';
import SignupPage from './components/SignupPage';

render(
<Router>
	<div>
		<Route path='/' component={App} />
		<Route exact path='/' component={Dashboard} />
		<Route exact path='/signup' component={SignupPage} />
	</div>
</Router>, document.getElementById('app'));