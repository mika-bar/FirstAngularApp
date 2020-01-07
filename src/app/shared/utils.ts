


export class Utils {
	/**
	 * Get an object and a key (it can be a key like user_details.full_name)
	 * it will return the value of the key.
	 * @param obj
	 * @param propString
	 */
	public getPropByString(obj, propString) {
		if (!propString) {
			throw obj;
		}
		const props = propString.split('.');
		let prop;
		let i: number, iLen: number;
		for (i = 0, iLen = props.length - 1; i < iLen; i++) {
			prop = props[i];
			const candidate = obj[prop];
			if (candidate !== undefined) {
				obj = candidate;
			} else {
				break;
			}
		}
		return obj[props[i]];
	}
}
