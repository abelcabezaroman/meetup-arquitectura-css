import Inferno from 'inferno';
import {Link} from 'inferno-router';

export default function () {
	return (
		<table className="c-table">
			<thead>
			<tr className="c-table__tr-head">
				<td className="c-table__td-head">Cabecera</td>
				<td className="c-table__td-head">Cabecera</td>
				<td className="c-table__td-head">Cabecera</td>
				<td className="c-table__td-head">Cabecera</td>
				<td className="c-table__td-head">Cabecera</td>
			</tr>
			</thead>
			<tbody>
			<tr className="c-table__tr">
				<td className="c-table__td">Contenido</td>
				<td className="c-table__td c-table__td--important c-table__td--primary">Contenido</td>
				<td className="c-table__td">Contenido</td>
				<td className="c-table__td">Contenido</td>
				<td className="c-table__td">Contenido</td>
			</tr>
			<tr className="c-table__tr">
				<td className="c-table__td">Contenido</td>
				<td className="c-table__td">Contenido</td>
				<td className="c-table__td">Contenido</td>
				<td className="c-table__td">Contenido</td>
				<td className="c-table__td">Contenido</td>
			</tr>
			<tr className="c-table__tr">
				<td className="c-table__td">Contenido</td>
				<td className="c-table__td">Contenido</td>
				<td className="c-table__td c-table__td--primary">Contenido</td>
				<td className="c-table__td c-table__td--important">Contenido</td>
				<td className="c-table__td">Contenido</td>
			</tr>
			<tr className="c-table__tr">
				<td className="c-table__td">Contenido</td>
				<td className="c-table__td">Contenido</td>
				<td className="c-table__td">Contenido</td>
				<td className="c-table__td">Contenido</td>
				<td className="c-table__td">Contenido</td>
			</tr>
			</tbody>
		</table>
	)
}
