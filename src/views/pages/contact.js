import Inferno from 'inferno';

const links = [{
	name: 'lukeed/inferno-starter',
	desc: 'A Webpack2 starter for building SPA / PWA / offline front-end apps with Inferno',
	href: 'https://github.com/lukeed/inferno-starter'
}, {
	name: 'infernojs/inferno',
	desc: 'An extremely fast, isomorphic JavaScript library for building modern user interfaces',
	href: 'https://www.npmjs.com/package/inferno'
}, {
	name: 'infernojs/inferno-router',
	desc: 'Provides routing functionality for Inferno',
	href: 'https://www.npmjs.com/package/inferno-router'
}, {
	name: 'mjackson/history',
	desc: 'Manage session history with JavaScript',
	href: 'https://www.npmjs.com/package/history'
}, {
	name: 'webpack/webpack',
	desc: 'A bundler for javascript and friends. Allows for code splitting & asynchronous lazy-loading.',
	href: 'https://github.com/webpack/webpack'
}, {
	name: 'FormidableLabs/webpack-dashboard',
	desc: 'A CLI dashboard for webpack-dev-server',
	href: 'https://github.com/FormidableLabs/webpack-dashboard'
}, {
	name: 'zeit/now',
	desc: 'Free (OSS) realtime global deployments',
	href: 'https://zeit.co/now'
}, {
	name: 'zeit/serve',
	desc: 'Single-command HTTP directory listing and file serving',
	href: 'https://github.com/zeit/serve'
}];

export default function (props) {
	return (
		<div className="container">
			<div className="o-content o-content--large">
				<ul className="c-contact-list">
					<li className="c-contact-list__item">Web: <a href="www.abelcabezaroman.com" title="Enlace canal Youtube">www.abelcabezaroman.com</a>
					</li>
					<li className="c-contact-list__item">Email: <a href="mailto:contacto@abelcabezaroman.com" title="Email">contacto@abelcabezaroman.com</a>
					</li>
					<li className="c-contact-list__item">Instagram: <a href="https://www.instagram.com/zero_neutro/"
																														 title="Cuenta Instagram">@zero_neutro</a></li>
					<li className="c-contact-list__item">Twitter: <a href="https://twitter.com/abelcabezaroman"
																													 title="Cuenta Twitter">@abelcabezaroman</a></li>
					<li className="c-contact-list__item">Youtube: <a
						href="https://www.youtube.com/channel/UCEM-F2ydtHRjD9QwmY3cieg" title="Enlace canal Youtube">ACR</a></li>


				</ul>
			</div>
			{/*<nav>*/}
			{/*{ links.map(obj =>*/}
			{/*<a className="card" href={ obj.href } target="_blank" rel="noopener">*/}
			{/*<strong>{ obj.name }</strong>*/}
			{/*<em>{ obj.desc }</em>*/}
			{/*</a>*/}
			{/*) }*/}
			{/*</nav>*/}
		</div>
	)
}
