// The following code is heavily based from marked (markedjs.com). Licensed under MIT: https://github.com/markedjs/marked/blob/master/LICENSE.md

;(function(root) {
'use strict';

// Escape function borrowed from marked -- https://github.com/markedjs/marked/blob/master/lib/marked.js#L1329-L1354
function escape(html, encode) {
    if (encode) {
        if (escape.escapeTest.test(html)) {
        return html.replace(escape.escapeReplace, function (ch) { return escape.replacements[ch]; });
        }
    } else {
        if (escape.escapeTestNoEncode.test(html)) {
        return html.replace(escape.escapeReplaceNoEncode, function (ch) { return escape.replacements[ch]; });
        }
    }

    return html;
}

escape.escapeTest = /[&<>"']/;
escape.escapeReplace = /[&<>"']/g;
escape.replacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};

escape.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
escape.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;

var escaper = {
    escape: escape
}

// Export the escape function -- based off of https://github.com/markedjs/marked/blob/master/lib/marked.js#L1683-L1690
if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = escaper;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return escaper; });
} else {
    root.escaper = escaper;
}
})(this || (typeof window !== 'undefined' ? window : global));
