import Inferno from 'inferno';
import {Link} from 'inferno-router';

export default function () {
	return (
		<header className="header">
			<div className="container">
				<h1>Arquitectura CSS</h1>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/blog">Blog</Link>
					<Link to="/credit">Credit</Link>
				</nav>
			</div>

		</header>
	)
}
