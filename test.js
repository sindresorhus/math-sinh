import test from 'ava';
import numberIsNan from 'number-is-nan';
import positiveZero from 'positive-zero';
import negativeZero from 'negative-zero';

Math.sinh = undefined;
const fn = require('./');

test(t => {
	t.true(numberIsNan(fn(NaN)));
	t.true(positiveZero(fn(+0)));
	t.true(negativeZero(fn(-0)));
	t.is(fn(Infinity), Infinity);
	t.is(fn(-Infinity), -Infinity);
	t.is(fn(0), 0);
	t.is(fn(1), 1.1752011936438014);
});
