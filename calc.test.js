const assert = require('assert');
const calc = require('./calc');

assert.equal(calc.sum(1,1), 2);

assert.equal(calc.sub(10,5), 5);

assert.equal(calc.mult(5,5), 25);

assert.equal(calc.div(10,2), 5);