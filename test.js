'use strict';
var test = require('ava');
var numberIsNan = require('number-is-nan');
var positiveZero = require('positive-zero');
var negativeZero = require('negative-zero');
Math.sinh = undefined;
var mathSinh = require('./');

test(function (t) {
	t.assert(numberIsNan(mathSinh(NaN)));
	t.assert(positiveZero(mathSinh(+0)));
	t.assert(negativeZero(mathSinh(-0)));
	t.assert(mathSinh(Infinity) === Infinity);
	t.assert(mathSinh(-Infinity) === -Infinity);
	t.assert(mathSinh(0) === 0);
	t.assert(mathSinh(1) === 1.1752011936438014);
	t.end();
});
