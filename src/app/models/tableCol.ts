export class TableCol {
	public name: string;
	public propName: string;
	public type: string;


	constructor(name: string, propName: string, type: string = 'text') {
		this.name = name;
		this.propName = propName;
		this.type = type;
	}
}
