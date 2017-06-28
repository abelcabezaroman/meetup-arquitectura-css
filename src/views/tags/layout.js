import Inferno from 'inferno';
import Header from './header';

export default function (props) {
	return (
		<iv>
			<Header />
			<main>
				{ props.children }
			</main>
		</iv>
	);
}
