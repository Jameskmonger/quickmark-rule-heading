'use strict';

const test = require('modunit');
const heading = require('./index');

test('it returns undefined for plain text', (t, input) => {

    let output = heading(input);

    t.assert.equal(undefined, output);

}, [
    ['apples and oranges'],
    ['plain text here'],
    ['woop dee doo']
]);

test('it returns undefined for dashes', (t, input) => {

    let output = heading(input);

    t.assert.equal(undefined, output);

}, [
    ['- apples and oranges'],
    ['--- plain text here'],
    ['----- woop dee doo']
]);
