import Inferno from 'inferno';
import {Link} from 'inferno-router';

export default function () {
	return (
		<header className="c-header">
			<div className="c-header__top">
				<div className="container">
					<div className="c-header__content">
						<h1 className="c-header__logo">Arquitectura CSS</h1>
					</div>

				</div>
			</div>
			<div className="c-header__bottom">
				<div className="container">
					<nav className="c-nav">
						<Link className="c-nav__link" to="/">Inicio</Link>
							<Link className="c-nav__link" to="/contact">Contacto</Link>
					</nav>
				</div>
			</div>
		</header>
	)
}
