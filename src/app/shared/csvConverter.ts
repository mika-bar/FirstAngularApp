import { User } from '../models/user';
import { TableCol } from '../models/tableCol';
import { Utils } from './utils';

export class CSVConverter {
	 private utils = new Utils();

	usersToCSV(userArray: User[], csvCols: TableCol[]) {
		let str = '';
		let row = '';

		csvCols.forEach((col: TableCol) => {
			row += col.name;
			row += ',';
		});
		row = row.slice(0, -1);
		str += row + '\r\n';

		userArray.forEach(user => {
			let line = '';
			csvCols.forEach( col => {
				const value = this.utils.getPropByString(user, col.propName);
				line += value.toString();
				line += ',';
			});
			str += line + '\r\n';
		});

		return str;
	}
}
