'use strict';

const zip = function(...objects) {
	let result = {};

	objects.forEach(object => {
		Object.entries(object).forEach(entry => {
			if (!(entry[0] in result)) {
				result[entry[0]] = entry[1];
			}
		});
	});

	return result;
}