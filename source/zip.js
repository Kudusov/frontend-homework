'use strict';

const zip = function(...objects) {
	let result = {}

	objects.forEach(function(object, i, objects) {
		let entries = Object.entries(object)
		entries.forEach(function(entry, j, entries) {
			if (!(entry[0] in result)) {
				result[entry[0]] = entry[1]
			}
		})
	})

	return result

}