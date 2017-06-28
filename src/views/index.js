import Inferno from 'inferno'
import { Route } from 'inferno-router'

import Home from './pages/home';
import Layout from './tags/layout';
import Error404 from './pages/errors/404';
import Contact from './pages/contact';

export default (
	<Route component={ Layout }>
		<Route path="/" component={ Home } />
		<Route path="/contact" component={ Contact } />
		<Route path="*" component={ Error404 } />
	</Route>
);
