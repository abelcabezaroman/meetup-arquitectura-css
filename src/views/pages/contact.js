import Inferno from 'inferno';

export default function (props) {
	return (
		<div className="container">
			<div className="o-content o-content--large">
				<ul className="c-contact-list">
					<li className="c-contact-list__item">Web: <a href="http://www.abelcabezaroman.com" title="Enlace canal Youtube">www.abelcabezaroman.com</a>
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
