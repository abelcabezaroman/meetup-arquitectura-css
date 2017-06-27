import Inferno from 'inferno';
import Header from './header';

export default function (props) {
	return (
		<div>
			<Header />
			<main>
				{ props.children }
			</main>
		</div>
	);
}
