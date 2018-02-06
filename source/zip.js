'use strict';

/*
const zip = function() {

	return Object.assign(...arguments)

}
*/

const zip = function() {
	var result = {}

	for ( var i = 0; i < arguments.length; i++ ) {
		var entries = Object.entries(arguments[i])
		for ( var j = 0; j < entries.length; j++ ) {
			if ( !(entries[j][0] in result) ) {
				result[entries[j][0]] = entries[j][1]
			}
		}
	}

	console.log(result)
	return result
}