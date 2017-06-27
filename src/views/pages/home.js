import Inferno from 'inferno';
import {Link} from 'inferno-router';
import Card from '../tags/card';
import CTable from '../tags/table';
import CTableSecondary from '../tags/table-secondary';

export default function (props) {
	return (
		<div className="container">
			<div className="o-content">
				<h2 className="c-heading-content">Botones</h2>
				<div className="row">
					<div className="col">
						<button className="c-button">Botón primario</button>
					</div>
					<div className="col">
						<button className="c-button c-button--secondary">Botón secundario</button>
					</div>
					<div className="col">
						<button className="c-button c-button--disabled">Botón desabilitado</button>
					</div>
					<div className="col">
						<button className="c-button c-button--secondary c-button--big">Botón grande/sec</button>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div className="o-content o-content--small">
							<button className="c-button c-button--full">Botón full</button>
						</div>
					</div>
				</div>
			</div>

			<div className="o-content">
				<h2 className="c-heading-content">Tabla</h2>
				<CTable/>
			</div>

			<div className="o-content">
				<h2 className="c-heading-content">Tabla Secondaria</h2>
				<CTableSecondary/>
			</div>
		</div>

	);
}
