'use strict';
var isFinite = require('is-finite');
var expm1 = require('expm1');

module.exports = Math.sinh || function (x) {
	if (!isFinite(x) || x === 0) {
		return x;
	}

	return (expm1(x) - expm1(-x)) / 2;
}
