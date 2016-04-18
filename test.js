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

test('it returns undefined for asterisks', (t, input) => {

    let output = heading(input);

    t.assert.equal(undefined, output);

}, [
    ['* apples and oranges'],
    ['*** plain text here'],
    ['***** woop dee doo']
]);

test('it returns the correct \'original\' for hashes', (t, input) => {

    let output = heading(input);
    t.assert.equal(input, output.original);

}, [
    ['# apples and oranges'],
    ['### plain text here'],
    ['##### woop dee doo']
]);

test('it returns the correct \'parsed\' for hashes', (t, prefix, input) => {

    let fullInput = prefix + input;
    let output = heading(fullInput);
    t.assert.equal(input, output.parsed);

}, [
    ['# ', 'apples and oranges'],
    ['### ', 'plain text here'],
    ['##### ', 'woop dee doo']
]);

test('it returns the correct \'depth\' for hashes', (t, input, depth) => {

    let output = heading(input);
    t.assert.equal(depth, output.depth);

}, [
    ['# one deep', 1],
    ['## two deep', 2],
    ['### three deep', 3],
    ['#### four deep', 4],
    ['##### five deep', 5],
    ['###### six deep', 6]
]);

test('it returns the correct output for a string with line breaks', t => {

    let input = '# Documentation\n\nThis is a documentation about the **cool project**.';
    let expectedOutput = {
        original: '# Documentation\n\n',
        parsed: 'Documentation',
        depth: 1
    };

    let output = heading(input);
    t.assert.deepEqual(expectedOutput, output);

});
