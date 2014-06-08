(function() {
    /**
     * Formats a string by replacing {#} with it's numerically corresponding argument.
     * eg: <i>formatString("Hello {0}! Good to see {1}", 'World', 'you!')</i> returns <i>"Hello World! Good to see you!"</i>
     * @param {string} subject The source string to perform the format on
     * @returns {string} the formatted string
     */
    var formatString = function(subject) {
        var args = Array.prototype.slice.call(arguments, 1);

        // If first and only arg is an object, assume this object is to be used to format the string, using a key-value relationship
        if(typeof args[0] === 'object') {
            var map = args[0];
            return subject.replace(/{(.+?)}/g, function(match, key) {
                if( typeof map[key] == 'undefined' ) return match;
                return map[key];
            });
        }

        return subject.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match;
        });
    };

    // === Export ===
    if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = formatString;
    }
    else {
        window.mb = window.mb || {};
        window.mb.formatString = formatString;
    }

}());