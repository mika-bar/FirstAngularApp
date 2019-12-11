import { Injectable } from '@angular/core';
import { FormControl, AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

import * as moment from 'moment';

@Injectable()
export class CustomValidatorsService {

	constructor() { }

	public validateIsraelId(control: FormControl) {
		let invalid = false;

		let id = String(control.value).trim();
		if (id.length > 9 || id.length < 5 || isNaN((+id || NaN))) {
			invalid = true;
		}
		if (!invalid) {
			id = id.length < 9 ? ('00000000' + id).slice(-9) : id;
			const calculated = Array.from(id, Number)
				.reduce((counter, digit, i) => {
					const step = digit * ((i % 2) + 1);
					return counter + (step > 9 ? step - 9 : step);
				}) % 10 === 0;
			invalid = !calculated;
		}

		if (invalid) {
			return { 'invalidId': true };
		} else {
			return null;
		}
	}

	public dateLessThan(beforeKey: string, afterKey: string) {

		return (group: FormGroup) => {
			const beforeControl = group.controls[beforeKey],
				afterControl = group.controls[afterKey];

			if (!beforeControl.value || !afterControl.value) {
				return null;
			}
			if (beforeControl.value > afterControl.value) {
				return afterControl.setErrors({ dateLessThan: true });
			} else {
				return null;
			}
		};
	}

	public timeLessThan(beforeTimeKey: string, afterTimeKey: string,
		beforeDateKey: string, afterDateKey: string, ) {

		return (group: FormGroup) => {
			const beforeTimeControl = group.controls[beforeTimeKey],
				afterTimeControl = group.controls[afterTimeKey],
				beforeDateControl = group.controls[beforeDateKey],
				afterDateControl = group.controls[afterDateKey];

			if (!beforeTimeControl.value || !afterTimeControl.value || !beforeDateControl.value || !afterDateControl.value) {
				return null;
			}
			if (afterDateControl.invalid) {
				return null;
			}

			const startArray = beforeTimeControl.value.split(':'),
				endArray = afterTimeControl.value.split(':');

			if (new Date(beforeDateControl.value).getTime() === new Date(afterDateControl.value).getTime() &&
				(Number(startArray[0]) > Number(endArray[0]) ||
					(Number(startArray[0]) === Number(endArray[0]) && Number(startArray[1]) > Number(endArray[1])))) {
				return afterTimeControl.setErrors({ timeLessThan: true });
			} else {
				return null;
			}
		};
	}

	public maxAmountCheck(maxKey: string, sumArrKeys: string[]) {

		return (group: FormGroup) => {
			const maxControl = group.controls[maxKey],
				sumControlsArray = sumArrKeys.map(key => {
					return group.controls[key];
				});

			const sumControlsValueEmpty = sumControlsArray.some(control => !control.value);

			if (!maxControl.value || sumControlsValueEmpty) {
				return null;
			}

			const sum = sumControlsArray.reduce((itemSum: number, control: AbstractControl) => {
				return itemSum + Number(control.value);
			}, 0);

			if (sum > maxControl.value) {
				return maxControl.setErrors({ notMax: true });
			} else {
				return null;
			}
		};
	}
}
