'use strict';

var REGEXP = /^(#{1,6}) *([\s\S]+?)(?:\n|\\n|$)/;

module.exports = function (input) {
    var parsed = REGEXP.exec(input);

    if (parsed) {
        return {
            original: parsed[0],
            parsed: parsed[2],
            depth: parsed[1].length
        };
    }

    return undefined;
};
