import Inferno from 'inferno';

import CTable from '../tags/table';
import CTableSecondary from '../tags/table-secondary';

export default function (props) {
	return (
		<div className="container">
			<div className="o-content">
				<section className="o-content">
					<h2 className="c-heading-content">Inputs</h2>
					<div className="o-box c-primary-box">
						<div className="row">
							<div className="col">
								<div className="c-input">
									<input type="text" className="c-input__element" placeholder="Introduce un texto"/>
								</div>
							</div>
							<div className="col">
								<div className="c-input">
									<input type="text" className="c-input__element c-input__element--primary"
											 placeholder="Introduce un texto"/>
								</div>
							</div>
						</div>
						<div className="row o-content o-content--small o-content--no-b">
							<div className="col">
								<div className="c-input">
									<label htmlFor="input-1" className="c-input__label">Label</label>
									<input id="input-1" type="text" className="c-input__element"
											 placeholder="Introduce un texto"/>
								</div>
							</div>
							<div className="col">
								<div className="c-input c-input--text-center">
									<label htmlFor="input-1" className="c-input__label">Label</label>
									<input id="input-1" type="text" className="c-input__element"
											 placeholder="Introduce un texto"/>
								</div>
							</div>
							<div className="col">
								<div className="c-input c-input--text-right">
									<label htmlFor="input-w" className="c-input__label">Label</label>
									<input id="input-2" type="text" className="c-input__element c-input__element--secondary"
											 placeholder="Introduce un texto"/>
								</div>
							</div>
						</div>
					</div>

				</section>


				<section className="o-content">
					<h2 className="c-heading-content">Botones</h2>
					<div className="o-box c-primary-box">
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
						<div className="row o-content o-content--small o-content--no-b">
							<div className="col">
								<button className="c-button c-button--full">Botón full</button>
							</div>
						</div>
					</div>
				</section>


				<section className="o-content">
					<h2 className="c-heading-content">Tabla</h2>
					<div className="o-content o-content--no-b">
						<CTable/>
					</div>
				</section>


				<section className="o-content">
					<h2 className="c-heading-content">Tabla Secondaria</h2>
					<div className="o-content">
						<CTableSecondary/>
					</div>
				</section>
			</div>
		</div>
	);
}
